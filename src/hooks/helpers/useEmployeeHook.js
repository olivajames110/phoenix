import { useStytch, useStytchUser } from " ";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { apiDomains } from "../../global/api/apiDomains";
import { apiEndpoints } from "../../global/api/apiEndpoints";
import { globalAlertFail } from "../../redux/actions/globalAlertActions";
import { updateGlobalData } from "../../redux/actions/globalDataActions";

export const useEmployeeHook = () => {
  const [getRequestIsLoading, setGetRequestIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [getRequestError, setGetRequestError] = useState();

  const activeHttpRequests = useRef([]);
  const stytch = useStytch();
  const sessionToken = stytch.session.getTokens();
  let token = sessionToken?.session_token;
  const { user } = useStytchUser();
  const userId = user?.user_id;
  const dispatch = useDispatch();

  const getEmployeeNameItems = useCallback(
    async (requestData = null, parameters = null) => {
      setGetRequestIsLoading(true);

      let endpoint = `${apiEndpoints.GET_USERS}?emailAddress=*`;

      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Request-Headers": "*",
          Authorization: `Bearer ${token}`,
          userId: userId,
        },
      };

      // console.log("GET HEADERS REQUEST START", requestOptions);

      const response = await fetch(`${apiDomains}/${endpoint}`, requestOptions);

      // console.log("HEADER RESPONSE", response.status);
      if (response.status === 500) {
        console.log("500--------->", response);
        // setGetRequestIsLoading(false);
        // navigate("/login");
        return response;
      }
      if (response.status === 401) {
        console.log("401 Unauthorized--------->", response);
        // setGetRequestIsLoading(false);
        dispatch(globalAlertFail("Could not fetch employees"));
        // navigate("/login");
        return response;
      }
      if (response.status === 200) {
        console.log("Success--------->", response);
        let result = await response.json();
        // console.log("result", result);
        setEmployees(result.items);
        dispatch(updateGlobalData({ key: "employees", value: result.items }));
        setGetRequestIsLoading(false);
        // return result;
      }
      // try {
      //   const response = await fetch(
      //     `${apiDomains}/${endpoint}`,
      //     requestOptions
      //   );

      //   activeHttpRequests.current = activeHttpRequests.current.filter(
      //     (reqCtrl) => reqCtrl !== httpAbortController
      //   );

      //   if (!response.ok) {
      //     throw new Error(response);
      //   }

      //   if (response.status === 200) {
      //     console.log("Success--------->", response);
      //     setGetRequestIsLoading(false);
      //     return response;
      //   }
      // } catch (err) {
      //   console.log("Fetch all deal header request error", err);
      //   // navigate(`/login`);

      //   setGetRequestError(err);
      //   setGetRequestIsLoading(false);
      //   throw err;
      // }
    },
    []
  );

  const clearGetError = () => {
    setGetRequestError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return {
    getRequestIsLoading,
    getRequestError,
    employees,
    clearGetError,

    getEmployeeNameItems,
  };
};
