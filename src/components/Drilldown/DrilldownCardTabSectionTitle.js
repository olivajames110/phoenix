import { Typography } from "@mui/material";
import React from "react";

const DrilldownCardTabSectionTitle = (props) => {
  return (
    <Typography
      variant="h3"
      sx={{
        marginBottom: "10px ",
        width: "initial",
        fontSize: ".85rem",
        fontWeight: "600",
        letterSpacing: 0,
        fontFamily: "var(--mont)",
        color: "var(--blueButton) !important",
      }}
    >
      {props.children}
    </Typography>
  );
};

export default DrilldownCardTabSectionTitle;
