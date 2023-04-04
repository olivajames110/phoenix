import React from "react";
import VerticalNavLayout from "../../components/layout/VerticalNavLayout";
import VerticalNavRightColumn from "../../components/layout/VerticalNavLayout/VerticalNavRightColumn";

import UserView from "../../components/layout/UserView";

import BorrowerDashboardHeader from "./BorrowerDashboardHeader/BorrowerDashboardHeader";
import BorrowerVerticalNavigation from "./BorrowerVerticalNavigation";
import { BorrowerViewRoutes } from "./BorrowerViewRoutes";
import "./styles/BorrowerView.css";

const BorrowerView = (props) => {
  return (
    <UserView id="borrower">
      <VerticalNavLayout>
        <BorrowerVerticalNavigation />
        <VerticalNavRightColumn>
          <BorrowerDashboardHeader />
          <BorrowerViewRoutes />
        </VerticalNavRightColumn>
      </VerticalNavLayout>
    </UserView>
  );
};

export default BorrowerView;
