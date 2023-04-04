import React from "react";
import DrilldownTitle from "../DrilldownTitle";
import "./DrilldownHeader.css";

const DrilldownHeader = (props) => {
  return (
    <header
      style={{ padding: props.padding ? "0 16px" : "0", ...props.style }}
      className={`drilldown-header ${props.border && "border"}`}
    >
      {props.h2 && (
        <DrilldownTitle style={props.style} h2>
          {props.children}
        </DrilldownTitle>
      )}
      {props.h3 && (
        <DrilldownTitle style={props.style} h3>
          {props.children}
        </DrilldownTitle>
      )}
      {props.h4 && (
        <DrilldownTitle style={props.style} h4>
          {props.children}
        </DrilldownTitle>
      )}
    </header>
  );
};

export default DrilldownHeader;
