import { Box } from "@mui/material";
import React from "react";
import BorderCard from "../../BorderCard";
import DrilldownHeader from "../../Drilldown/DrilldownHeader";
import WidgetCard from "../WidgetCard";

const WidgetOuterTitle = (props) => {
  return (
    <Box sx={{ height: "100%" }}>
      <DrilldownHeader
        style={{
          paddingBottom: "2px",
          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
        h2={!props.h3 ? true : false}
        h3={props.h3 ? true : false}
      >
        {props.title}
        {props.headerContent}
      </DrilldownHeader>
      {props.noCard ? (
        props.children
      ) : (
        <WidgetCard>{props.children}</WidgetCard>
      )}
    </Box>
  );
};

export default WidgetOuterTitle;
