import React from "react";
import BackgroundShape from "../../components/shared/BackgroundShape";
import StatsSection from "./StatsSection/StatsSection";

import UserAuthFormsSection from "./UserAuthFormsSection";

import "./UserAuthScreen.css";

const UserAuthScreen = (props) => {
  return (
    <>
      <BackgroundShape />
      <div className="main-inner-wrapper">
        <UserAuthFormsSection
          userType={props.userType}
          broker={props.broker}
          admin={props.admin}
        />

        <StatsSection />
      </div>
    </>
  );
};

export default UserAuthScreen;
