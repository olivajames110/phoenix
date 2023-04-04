import { Box } from "@mui/material";
import React from "react";

const BorderCard = ({
  id,
  className,
  borderWidth,
  style,
  sx,
  children,
  ref,
}) => {
  const styles = {
    border: "2px solid #bebdbd57",
    borderRadius: "4px",
    overflow: "hidden",
    backgroundColor: "#ffffff",
  };
  return (
    <Box
      component={"article"}
      id={id}
      style={{
        ...style,
        ...styles,
        ...sx,
        borderWidth: borderWidth ? borderWidth : 2,
      }}
      className={`border-card ${className}`}
      ref={ref}
    >
      {children}
    </Box>
  );
};

export default BorderCard;
