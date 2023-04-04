import React from "react";
import BorderCard from "../../BorderCard";

import "./DashboardWidget.css";

const DashboardWidget = (props) => {
  return (
    <div
      id={props.id}
      className={`dashboard-widget ${props.ticker ? "ticker" : ""} ${
        props.status ? props.status : ""
      } ${props.type ? props.type : ""}`}
    >
      <BorderCard style={props.style}>{props.children}</BorderCard>
    </div>
  );
};

export default DashboardWidget;
