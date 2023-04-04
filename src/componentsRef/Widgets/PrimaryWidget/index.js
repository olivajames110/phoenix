import { Box, Typography } from "@mui/material";
import React from "react";

import DashboardWidget from "../DashboardWidget";
// import "./PrimaryWidget.css";

const PrimaryWidget = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "#ffffff",
        border: "var(--border)",
        display: "flex",
        // alignItems: "center",
        flexGrow: 1,
        width: "100%",
        // justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box padding={"12px"} borderBottom="var(--border)">
        <Typography variant="h3">{props.title}</Typography>
      </Box>
      <div className="dialog-body">{props.children}</div>
    </Box>
  );
};

export default PrimaryWidget;
