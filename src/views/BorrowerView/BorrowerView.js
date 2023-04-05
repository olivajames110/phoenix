import React from "react";

import DashboardMain from "./DashboardMain";
import DashboardSideNav from "./DashboardSideNav/DashboardSideNav";
import "./styles/BorrowerView.css";

const BorrowerView = (props) => {
  return (
    <>
      <DashboardSideNav />
      <DashboardMain />
    </>
  );
};

export default BorrowerView;
