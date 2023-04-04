import { Box } from "@mui/material";
import React from "react";

const DrilldownCardTabBody = ({
  sx,
  noPadding,
  noBodySidePadding,
  children,
}) => {
  const sidePadding = noBodySidePadding ? 0 : "10px";
  return (
    <Box
      id="drilldown-card-tab-body"
      p={noPadding ? " 0" : `14px ${sidePadding}`}
      // p={noPadding ? "4px" : "18px 14px"}
      sx={{ display: "flex", flexDirection: "column", flexGrow: 1, ...sx }}
    >
      {children}
    </Box>
  );
};

export default DrilldownCardTabBody;
