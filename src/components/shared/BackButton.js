import { ChevronLeftRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const BackButton = (props) => {
  const { onClick, sx, children } = props;
  return (
    <Button
      sx={sx}
      onClick={onClick}
      startIcon={
        <ChevronLeftRounded
          sx={{
            background: "#dfe7ed",
            color: "var(--blue)",
            borderRadius: "50px",
          }}
        />
      }
    >
      {children}
    </Button>
  );
};

export default BackButton;
