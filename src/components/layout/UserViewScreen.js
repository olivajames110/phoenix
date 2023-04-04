import { Box } from "@mui/material";
import React from "react";

const UserViewScreen = ({ sx, id, children }) => {
  const style = { height: "100%", background: "#f5f6fa" };
  return (
    <Box component="main" sx={{ ...style, ...sx }} id={id}>
      {children}
    </Box>
  );
};

export default UserViewScreen;
