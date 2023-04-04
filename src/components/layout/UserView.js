import { Box } from "@mui/material";
import React from "react";

const UserView = ({ sx, id, children, component }) => {
  const style = { height: "100%", background: "#f5f6fa", overflowY: "auto" };
  return (
    <Box
      sx={{ ...style, ...sx }}
      id={id}
      component={component}
      className="user-view"
    >
      {children}
    </Box>
  );
};

export default UserView;
