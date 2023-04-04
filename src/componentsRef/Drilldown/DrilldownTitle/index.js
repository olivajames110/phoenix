import React from "react";
import "./DrilldownTitle.css";

const DrilldownTitle = (props) => {
  if (props.h1) {
    return (
      <h1 style={props.style} className="drilldown-header-title" id={props.id}>
        {props.children}
      </h1>
    );
  }
  if (props.h2) {
    return (
      <h2 style={props.style} className="drilldown-header-title" id={props.id}>
        {props.children}
      </h2>
    );
  }
  if (props.h3) {
    return (
      <h3 style={props.style} className="drilldown-header-title" id={props.id}>
        {props.children}
      </h3>
    );
  }
  if (props.h4) {
    return (
      <h4 style={props.style} className="drilldown-header-title" id={props.id}>
        {props.children}
      </h4>
    );
  }
};

export default DrilldownTitle;
