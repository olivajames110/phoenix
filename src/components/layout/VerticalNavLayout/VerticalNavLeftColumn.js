import { Drawer, Toolbar } from "@mui/material";
import React from "react";

const VerticalNavLeftColumn = ({ anchor, width, children }) => {
  return (
    <Drawer
      className="vertical-nav-layout__left-column"
      variant="permanent"
      anchor={anchor ? anchor : "left"}
      sx={{
        width: width,
        flexShrink: 0,
        boxShadow: "var(--bs)",
        [`& .MuiDrawer-paper`]: {
          width: width,
          boxSizing: "border-box",
        },
      }}
    >
      {children}
    </Drawer>
  );
};

export default VerticalNavLeftColumn;
