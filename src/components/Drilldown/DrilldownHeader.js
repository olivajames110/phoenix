import { Box } from "@mui/material";
import React from "react";

const DrilldownHeader = (props) => {
  return (
    <Box
      id="drilldown-header"
      sx={{ background: "#ffffff", boxShadow: "var(--bs)" }}
    >
      {props.children}
    </Box>
  );
};

export default DrilldownHeader;
