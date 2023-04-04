import React from "react";
import { Navigate, Route, Routes } from "react-router";
import BorrowerCreditAuthScreen from "./screens/BorrowerCreditAuthScreen";
import BorrowerDashboardScreen from "./screens/BorrowerDashboardScreen";
import BorrowerFilesScreen from "./screens/BorrowerFilesScreen";
import BorrowerLoanDrilldown from "./screens/BorrowerLoanDrilldown";
import BorrowerLoansScreen from "./screens/BorrowerLoansScreen";
import BorrowerLoanScenariosScreen from "./screens/BorrowerLoanScenariosScreen/BorrowerLoanScenariosScreen";
import BorrowerProfileScreen from "./screens/BorrowerProfileScreen/BorrowerProfileScreen";

export const BorrowerViewRoutes = (props) => {
  return (
    <Routes>
      <Route path={"/*"} element={<BorrowerDashboardScreen />} />
      <Route path={"/loan-applications/*"}>
        <Route index element={<BorrowerLoansScreen />} />
        <Route path={":id/*"} element={<BorrowerLoanDrilldown />} />
      </Route>
      <Route
        path={"/credit-authorizations"}
        element={<BorrowerCreditAuthScreen />}
      />
      <Route path={"/file-manager*"} element={<BorrowerFilesScreen />} />
      <Route path={"/scenarios*"} element={<BorrowerLoanScenariosScreen />} />
      <Route path={"/profile*"} element={<BorrowerProfileScreen />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};
