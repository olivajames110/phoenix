import { Typography } from "@mui/material";
import React from "react";

const ErrorMessage = ({ show, style, bold, message, children }) => {
  return show ? (
    <Typography
      style={{
        // paddingTop: "10px",
        color: "var(--red)",
        textAlign: "center",
        fontWeight: bold ? 700 : 500,
        ...style,
      }}
      className="error"
    >
      {message}
    </Typography>
  ) : null;
};

export default ErrorMessage;
