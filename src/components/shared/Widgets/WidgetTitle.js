import { Typography } from "@mui/material";
import React from "react";

const WidgetTitle = ({ children, sx }) => {
  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "center",
        fontWeight: 600,
        color: "var(--blue)",
        fontSize: "1rem",
        ...sx,
      }}
      variant="h3"
    >
      {children}
    </Typography>
  );
};

export default WidgetTitle;
