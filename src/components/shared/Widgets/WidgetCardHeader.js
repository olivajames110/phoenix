import { Box, Typography } from "@mui/material";
import React from "react";
import WidgetTitle from "./WidgetTitle";

const WidgetCardHeader = ({ title, children, sx, titleSx }) => {
  if (title) {
    return (
      <Box sx={sx} padding={"14px 10px"}>
        <WidgetTitle sx={titleSx}>{title}</WidgetTitle>
      </Box>
    );
  }
  return (
    <Box sx={sx} padding={"14px"}>
      {children}
    </Box>
  );
};

export default WidgetCardHeader;
