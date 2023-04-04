import { Navigate, Route, Routes } from "react-router";
import Authenticate from "../Authenticate";
import UserAuthScreen from "../components/UserAuthScreen";
import { userTypes } from "../global/userTypes";
import BorrowerCreditAuthWorkspace from "../views/Unauthenticated/screens/BorrowerCreditAuthWorkspace";
import BorrowerLoanApplicationWorkspace from "../views/Unauthenticated/screens/BorrowerLoanApplicationWorkspace";

export const nonAuthenticatedRoutes = (
  <Routes>
    <Route
      path="/"
      element={<UserAuthScreen userType={userTypes.BORROWER} />}
    />
    <Route
      path="/login"
      element={<UserAuthScreen userType={userTypes.BORROWER} />}
    />

    <Route
      path="/admin"
      element={<UserAuthScreen userType={userTypes.FLATIRON_EMPLOYEE} />}
    />
    <Route
      path="/admin-login"
      element={<UserAuthScreen userType={userTypes.ADMIN} />}
    />
    <Route
      path="/borrower-full-application"
      element={<BorrowerLoanApplicationWorkspace />}
    />
    <Route
      path="/credit-authorization"
      element={<BorrowerCreditAuthWorkspace />}
    />
    <Route path="/sign-in" element={<BorrowerCreditAuthWorkspace />} />

    <Route path="/authenticate" element={<Authenticate />} />
    {/* <Route path="/invite-authenticate" element={<BorrowerAuthenticate />} /> */}

    <Route path="*" element={<Navigate to={`/`} replace />} />
  </Routes>
);
