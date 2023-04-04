import React from "react";

import { Card } from "@mui/material";

import DrilldownHeader from "../DrilldownHeader";

import "./DrilldownTab.css";

const DrilldownTab = (props) => {
  const content = (
    <div id={props.id} className="drilldown-tab">
      {props.title && (
        <div className="drilldown-tab__title">
          <DrilldownHeader h2>{props.title}</DrilldownHeader>
        </div>
      )}
      <div className="drilldown-tab__body">{props.children}</div>
    </div>
  );
  return props.card ? <Card>{content}</Card> : content;
};

export default DrilldownTab;
