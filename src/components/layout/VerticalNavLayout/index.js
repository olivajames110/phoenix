import { Box } from "@mui/material";
import React from "react";

const VerticalNavLayout = (props) => {
  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      {/* <CssBaseline sx={{ minHeight: "10px" }} /> */}
      {props.children}
    </Box>
  );
  // return (
  //   <div id={props.id} className="vertical-nav-layout">
  //     {props.children}
  //   </div>
  // );
};

export default VerticalNavLayout;
