import { useStytch, useStytchSession } from " ";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FullPageLoader from "./components/shared/FullPageLoader";
import { useAuthHook } from "./hooks/useAuthHook";
import { globalAlertFail } from "./redux/actions/globalAlertActions";
import { setIsLoadingTrue } from "./redux/actions/isLoadingActions";

const Authenticate = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { handleLoginUser } = useAuthHook();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const stytch = useStytch();
  const { session } = useStytchSession();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const token = params.get("token");

    //Checks if session already exisits

    if (session) {
      /*
      If session object exists, start login process.
      -Upon success, token is returned
      -Token is used to fetch user data and turn isLoggedIn to true
      */
      let email = session.authentication_factors[0].email_factor.email_address;

      let data = {
        emailAddress: email.toLowerCase(),
        user_id: session.user_id,
      };
      console.log("data:", data);
      handleLoginUser(data);
    } else {
      //If session object does not exist, use authenticate Stytch method and pass the token in
      // stytch.magicLinks.authenticate(token, { session_duration_minutes: 60 });
      console.log("stytch auth?:", stytch);
      const authPromise = stytch.magicLinks
        .authenticate(token, {
          session_duration_minutes: 720,
        })
        .then(() => navigate("/home"));

      authPromise.catch((err) => {
        setError(err);
        setTimeout(() => {
          console.log("Stytch login error", err);

          dispatch(globalAlertFail("Could not authenticate"));
          navigate("/login");
        }, 10000);
      });
    }
  }, [stytch, session, navigate]);

  useEffect(() => {
    dispatch(setIsLoadingTrue());
    console.log("UF", session);
  }, []);

  return <FullPageLoader />;
};

export default Authenticate;
