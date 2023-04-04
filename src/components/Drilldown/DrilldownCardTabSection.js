import React from "react";

import { Box } from "@mui/system";
import DrilldownCardTabSectionTitle from "./DrilldownCardTabSectionTitle";

const DrilldownCardTabSection = ({ title, children, borderBottom, sx }) => {
  const borderBottomStyles = {
    borderBottom: "var(--border)",
    paddingBottom: "30px",
    marginBottom: "15px",
  };

  const sharedStyles = { marginBottom: "30px", paddingTop: "15px" };
  const conditionalStyles = borderBottom ? borderBottomStyles : null;

  const styles = {
    ...sharedStyles,
    ...conditionalStyles,
    ...sx,
  };

  return (
    <Box sx={styles}>
      {title ? (
        <DrilldownCardTabSectionTitle>{title}</DrilldownCardTabSectionTitle>
      ) : null}
      {children}
    </Box>
  );
};

export default DrilldownCardTabSection;
