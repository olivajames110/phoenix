import React from "react";

import ScreenBody from "./Screen/ScreenBody";
import ScreenHeader from "./Screen/ScreenHeader";
import ScreenTitle from "./Screen/ScreenTitle";
import UserView from "./UserView";
import VerticalNavLayout from "./VerticalNavLayout";
import DashboardSideNav from "../../views/BorrowerView/DashboardSideNav/DashboardSideNav";
import VerticalNavRightColumn from "./VerticalNavLayout/VerticalNavRightColumn";

const DashboardScreen = ({ children, hideSidenav }) => {
  return (
    <UserView id="borrower">
      <VerticalNavLayout>
        {hideSidenav ? null : <DashboardSideNav />}
        <VerticalNavRightColumn>{children}</VerticalNavRightColumn>
      </VerticalNavLayout>
    </UserView>
  );
};
export default React.memo(DashboardScreen);
