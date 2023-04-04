import { Navigate, Route, Routes } from "react-router";
import BorrowerCreditAuthWorkspace from "../views/Unauthenticated/screens/BorrowerCreditAuthWorkspace";
import BorrowerLoanApplicationWorkspace from "../views/Unauthenticated/screens/BorrowerLoanApplicationWorkspace";

import PortalWorkspace from "./PortalWorkspace";
const entryPath = "/";
export const authenticatedRoutes = (
  <Routes>
    <Route path="/*" element={<PortalWorkspace />} />
    <Route
      path="/borrower-full-application"
      element={<BorrowerLoanApplicationWorkspace />}
    />
    <Route
      path="/credit-authorization"
      element={<BorrowerCreditAuthWorkspace />}
    />

    <Route path="*" element={<Navigate to={entryPath} replace />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
