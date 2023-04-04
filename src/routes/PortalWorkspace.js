import { useStytch, useStytchSession, useStytchUser } from " ";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FullPageLoader from "../components/shared/FullPageLoader";
import { userTypes } from "../global/userTypes";
import { checkIfStringContainsFlatironEmail } from "../helpers/checkIfStringContainsFlatironEmail";
import { checkIfUserTypeIsInternal } from "../helpers/checkIfUserTypeIsInternal";
import { useAuthHook } from "../hooks/useAuthHook";

import BorrowerView from "../views/BorrowerView";

import EmployeeView from "../views/EmployeeView";

const PortalWorkspace = (props) => {
  // const [result, setResult] = useState(resultSuccess);
  const { session } = useStytchSession();
  const { user } = useStytchUser();
  const stytch = useStytch();
  const userType = useSelector((state) => state.user);
  const { handleLoginUser } = useAuthHook();

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("🚀 ~ WORKSPACE INIT");
      console.log("      ~ SESSION", session);
      console.log("      ~ USER", user);
      console.log("      ~ STYCH TOKENS", stytch.session.getTokens());
    }
    handleLoginUser();
  }, []);

  return (
    <>
      {(userType.userType === undefined || userType.userType === "") && (
        <FullPageLoader />
      )}
      {/* Require flatiron email  */}
      {checkIfUserTypeIsInternal(userType.userType) &&
        checkIfStringContainsFlatironEmail(
          session?.authentication_factors[0].email_factor.email_address
        ) && <EmployeeView />}
      {userType.userType === userTypes.BORROWER && <BorrowerView />}
    </>
  );
};

export default PortalWorkspace;
