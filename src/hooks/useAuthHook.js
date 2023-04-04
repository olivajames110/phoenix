import { useStytch, useStytchSession, useStytchUser } from " ";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkIfUserTypeIsInternal } from "../helpers/checkIfUserTypeIsInternal";

import { apiEndpoints } from "../global/api/apiEndpoints";
import { setBorrowerProfileState } from "../redux/actions/borrowerProfileActions";
import { globalAlertFail } from "../redux/actions/globalAlertActions";
import { setIsLoadingFalse } from "../redux/actions/isLoadingActions";
import { logInUser } from "../redux/actions/isLoggedInActions";
import { setUserState } from "../redux/actions/userActions";
import { setUserType } from "../redux/actions/userTypeActions";
import { useAxiosHook } from "./useAxiosHook";

const errorInit = {
  status: null,
  message: null,
};
export const useAuthHook = () => {
  const [authError, setAuthError] = useState(errorInit);

  const globalData = useSelector((state) => state.globalData);
  const { user } = useStytchUser();

  const {
    axiosPostIsLoading,
    axiosGetIsLoading,
    axiosPostRequest,
    axiosGetRequest,
  } = useAxiosHook();
  const authIsLoading = axiosPostIsLoading || axiosGetIsLoading ? true : false;

  const { session } = useStytchSession();
  const stytch = useStytch();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginUser = useCallback(async () => {
    /*
    - Params: none
    - Desc: finds email and user_id from Stytch, passes data to  POST to /login
        ex)  let data = {
                  emailAddress: email.toLowerCase(),
                  user_id: session.user_id,
                };
    - Response: 200
        handleFetchUserData() is run on 200 success
    */
    let endpoint = apiEndpoints.LOGIN;
    // console.log("USERRR", user);
    let email = user?.emails[0]?.email;
    // let email = session.authentication_factors[0].email_factor.email_address;

    localStorage.removeItem("userData");
    localStorage.removeItem("userType");
    localStorage.removeItem("auth");
    localStorage.removeItem("ironLinc");

    let data = {
      emailAddress: email,
      user_id: session.user_id,
    };

    const onSuccess = () => {
      handleFetchUserData();
      setAuthError(errorInit);
    };
    const onFail = () => {
      setAuthError({
        status: true,
        message: "Could not connect to the server, please try again later.",
      });

      dispatch(globalAlertFail("Could not login user."));
      stytch.session.revoke();
    };

    const params = {
      name: "Login",
      path: endpoint,
      payload: data,
      onSuccessFn: onSuccess,
      onFailFn: onFail,
      onFailMsg: "Could not log in",
    };
    await axiosPostRequest(params);
  }, []);

  const handleFetchUserData = async () => {
    /*
    - Params: none
    - Desc: finds email from Stytch, passes to GET to /getUserData
        ex)  let data = {
                  emailAddress: email.toLowerCase(),
                  user_id: session.user_id,
                };
    - Response: 200
        handleFetchUserData() is run on 200 success
    */

    let email = session.authentication_factors[0].email_factor.email_address;
    const endpoint = `${apiEndpoints.GET_USER_DATA}?emailAddress=${email}`;
    // console.log("Send Data to endpoint ->", { endpoint });
    const onSuccess = (responseData) => {
      // console.log("Fetched user data: ", responseData);

      let userType = responseData.userType;

      dispatch(setUserType(userType));
      dispatch(setBorrowerProfileState(responseData));
      dispatch(setUserState(responseData));
      dispatch(logInUser());

      if (userType === undefined || userType === "" || userType === null) {
        dispatch(globalAlertFail("Could not verify user role."));
        stytch.session.revoke();
      }

      if (checkIfUserTypeIsInternal(userType)) {
        // console.log("Entry URL", globalData.entryUrl);
        const url =
          globalData.entryUrl === "/" ? "/deals/pipeline" : globalData.entryUrl;
        navigate(url);
      }
      dispatch(setIsLoadingFalse());
      setAuthError(errorInit);
    };
    const onFail = () => {
      setAuthError({
        status: true,
        message: "Invalid email address or password, please try again.",
      });

      dispatch(setIsLoadingFalse());
      dispatch(globalAlertFail("Could not get user data."));
      stytch.session.revoke();
    };
    const params = {
      name: "Get User Data",
      path: endpoint,
      onSuccessFn: onSuccess,
      onFailFn: onFail,
      onFailMsg: "Could not log in",
    };
    await axiosGetRequest(params);
  };
  const handleRevokeSession = async () => {
    /*
    - Params: none
    - Desc: finds email from Stytch, passes to GET to /getUserData
        ex)  let data = {
                  emailAddress: email.toLowerCase(),
                  user_id: session.user_id,
                };
    - Response: 200
        handleFetchUserData() is run on 200 success
    */

    stytch.session.revoke();
  };

  //Sends post without token

  return {
    authIsLoading,
    authError,
    handleRevokeSession,
    handleLoginUser,
    handleFetchUserData,
  };
};
