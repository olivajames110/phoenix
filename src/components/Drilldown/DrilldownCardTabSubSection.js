import React from "react";

import { Box } from "@mui/system";

const DrilldownCardTabSubSection = ({ children, sx }) => {
  const styles = {
    position: "relative",
    flexGrow: 1,
    background: "#e5e8ea0f",
    margin: "0 -14px -16px -14px",
    padding: "14px",
    boxShadow: "inset 0 0 1px 1px #0000000d",
    ...sx,
  };

  const boxShadowStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "4px",
    background: "linear-gradient(180deg, #00000017, transparent)",
  };

  return (
    <>
      <Box sx={styles}>
        <Box sx={boxShadowStyle} />
        {children}
      </Box>
    </>
  );
};

export default DrilldownCardTabSubSection;
