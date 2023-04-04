import { Typography } from "@mui/material";
import React from "react";

const ScreenSubTitle = ({ children, sx }) => {
  const styles = {
    fontWeight: 500,
    fontSize: ".95rem",
  };
  return (
    <Typography variant="h3" sx={{ ...styles, ...sx }}>
      {children}
    </Typography>
  );
};

export default ScreenSubTitle;
