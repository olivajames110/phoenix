import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import VerticalNavRightColumn from "../../../components/layout/VerticalNavLayout/VerticalNavRightColumn";
import BorrowerDashboardHeader from "../BorrowerDashboardHeader/BorrowerDashboardHeader";
import BorrowerDashboardScreen from "../screens/BorrowerDashboardScreen/BorrowerDashboardScreen";
import BorrowerLoanDrilldown from "../screens/BorrowerLoanDrilldown";
import FundraisingScreen from "../screens/FundraisingScreen/FundraisingScreen";
import FundraisingCreateScreen from "../screens/FundraisingCreateScreen/FundraisingCreateScreen";

const DashboardMain = (props) => {
  return (
    <>
      <VerticalNavRightColumn>
        <BorrowerDashboardHeader />
        <Routes>
          <Route path={"/*"} element={<BorrowerDashboardScreen />} />
          <Route path={"/fundraising/*"}>
            <Route index element={<FundraisingScreen />} />
            <Route path={":id/*"} element={<BorrowerLoanDrilldown />} />
            <Route path={"create"} element={<FundraisingCreateScreen />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </VerticalNavRightColumn>
    </>
  );
};

export default DashboardMain;
