import { Box } from "@mui/system";
import React from "react";
import DrilldownHeader from "../DrilldownHeader";
import "./DrilldownSectionGroup.css";

const DrilldownSectionGroup = (props) => {
  return (
    <Box
      id={props.id}
      className={`drilldown-section-group ${props.padding && "padding"}  ${
        props.borderBottom && "border-bottom"
      }`}
    >
      {/* {props.title && (
        <DrilldownHeader
          h2={props.h2 ? true : false}
          h3={props.h3 ? true : false}
          h4={props.h4 ? true : false}
        >
          {props.title}
        </DrilldownHeader>
      )} */}
      <div style={{ position: "relative" }} className="drilldown-section__body">
        {props.title && (
          <DrilldownHeader
            h2={props.h2 ? true : false}
            h3={props.h3 ? true : false}
            h4={props.h4 ? true : false}
          >
            {props.title}
          </DrilldownHeader>
        )}
        {props.children}
      </div>
    </Box>
  );
};

export default DrilldownSectionGroup;
