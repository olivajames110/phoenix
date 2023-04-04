import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const VerticalNavRightColumn = (props) => {
  // return (
  //   <div className="vertical-nav-layout__right-column">{props.children}</div>
  // );
  return (
    <Box
      className="vertical-nav-layout__right-column"
      component="main"
      sx={{ display: "flex", flexDirection: "column", flexGrow: 1, p: 0 }}
    >
      {/* <Toolbar /> */}
      {props.children}
    </Box>
  );
};

export default VerticalNavRightColumn;
