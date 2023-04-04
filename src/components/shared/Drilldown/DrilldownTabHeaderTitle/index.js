import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const DrilldownTabHeaderTitle = (props) => {
  return (
    <Box
      sx={{
        border: "1px solid #1c456a08",
        background: "#e8ecf0e6",
        margin: "-16px -16px 10px",
        padding: "14px 16px 0",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          marginBottom: "10px ",
          width: "initial",
          fontSize: "1.2rem",
          fontWeight: "700",
          letterSpacing: 0,
          fontFamily: "var(--mont)",
          color: "var(--blueButton) !important",
        }}
      >
        {props.children}
      </Typography>
      <Box>{props.bodyContent}</Box>
    </Box>
  );
};

export default DrilldownTabHeaderTitle;
