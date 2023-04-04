import { ChevronLeftOutlined } from "@mui/icons-material";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import React from "react";

const DrilldownTitleButton = ({ onClick, children, isLoading }) => {
  return (
    <Button
      sx={{ display: "flex", alignItems: "center" }}
      onClick={onClick}
      startIcon={
        <ChevronLeftOutlined
          sx={{
            marginRight: "4px",
            background: "#39679129",
            padding: "1px",
            fill: "var(--blue)",
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50px",
          }}
        />
      }
    >
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          alignItems: "center",
          // fontSize: "1.4rem",
          lineHeight: "2rem",
          fontWeight: "700",
          color: "var(--blue)",
        }}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default DrilldownTitleButton;
