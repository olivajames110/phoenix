import { AppBar } from "@mui/material";
import React from "react";

const VerticalNavAppBar = (props) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "var(--bs)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      {props.children}
    </AppBar>
  );
};

export default VerticalNavAppBar;
