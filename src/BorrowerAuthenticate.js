import { useStytch, useStytchSession } from " ";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FullPageLoader from "./components/shared/FullPageLoader";
import { globalAlertFail } from "./redux/actions/globalAlertActions";

const BorrowerAuthenticate = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const stytch = useStytch();
  const { session } = useStytchSession();

  useEffect(() => {
    console.log("Second UF start");
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    //Checks if session already exisits

    if (session) {
      console.log("BORROWER AUTH  session exists", session);
      /*
      If session object exists, start login process.
      -Upon success, token is returned
      -Token is used to fetch user data and turn isLoggedIn to true
      */

      // stytch.user.update({
      //   name: {
      //     first_name: "Jimmy Test",
      //     last_name: "Oliva Test",
      //   },
      //   untrusted_metadata: {
      //     userType: "borrower",
      //   },
      // });

      // navigate("/home");
      // handleLoginUser();
      // dispatch(logInUser());
      // handleLoginUser(data);
    } else {
      //If session object does not exist, use authenticate Stytch method and pass the token in
      // stytch.magicLinks.authenticate(token, { session_duration_minutes: 60 });
      console.log("Borrower Auth Session does not exist");
      // stytch.magicLinks.authenticate(token, {
      //   session_duration_minutes: 60,
      // });
      const authPromise = stytch.magicLinks
        .authenticate(token, {
          session_duration_minutes: 60,
        })
        .then(() => console.log("success invite"));
      // .then(() => navigate("/login"));

      authPromise.catch((err) => {
        setError(err);
        console.log("Stytch login error", err, err.error_message);
        setTimeout(() => {
          dispatch(globalAlertFail("Could not authenticate"));
          // navigate("/login");
        }, 10000);
      });
    }
  }, []);

  // useEffect(() => {
  //   dispatch(setIsLoadingTrue());
  //   console.log("Borrower UF", session);
  // }, []);

  return <FullPageLoader />;
};

export default BorrowerAuthenticate;
