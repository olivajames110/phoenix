import { Box, Container } from "@mui/material";
import React from "react";

const DrilldownHeaderRow = ({ borderTop, sx, children }) => {
  return (
    <Container
      id="drilldown-header__row"
      sx={{
        display: "flex",
        width: "100%",
        padding: "10px 0",
        borderTop: borderTop ? "1px solid var(--borderGray)" : "none",
        ...sx,
      }}
      maxWidth={false}
    >
      {children}
    </Container>
  );
};

export default DrilldownHeaderRow;
