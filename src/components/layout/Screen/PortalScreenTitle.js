import { Typography } from "@mui/material";
import React from "react";

const PortalScreenTitle = ({ children, sx }) => {
  const titleStyles = {
    fontFamily: "var(--mont) !important",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: " 1.4rem",
    lineHeight: "2.4rem",
    textTransform: "capitalize",
  };
  return (
    <Typography variant="h1" style={{ ...titleStyles, ...sx }}>
      {children}
    </Typography>
  );
};

export default PortalScreenTitle;
