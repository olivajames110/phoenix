import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const MuiAppHeader = ({ id, position, children, sx, toolbarSx }) => {
  const styles = {
    backgroundImage:
      " linear-gradient(    45deg,    #285b8a 0%,    #21517d 33%,    #235380 50%,    #25537e 67%,    #2d577c 100%  )",
    color: "#ffffff",
    fill: "#ffffff",
    boxShadow: "none",
    zIndex: (theme) => theme.zIndex.drawer + 1,
  };
  return (
    <>
      <AppBar
        id={id}
        sx={{ ...styles, ...sx }}
        position={position ? position : "relative"}
      >
        <Toolbar sx={{ width: "100%", ...toolbarSx }}>{children}</Toolbar>
      </AppBar>
      {position === "fixed" ? <Toolbar /> : null}
    </>
  );
};

export default MuiAppHeader;
