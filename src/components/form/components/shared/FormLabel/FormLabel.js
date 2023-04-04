import { InputLabel } from "@mui/material";
import React from "react";
import "./FormLabel.css";

const FormLabel = (props) => {
  return (
    <div
      id={props.id}
      style={props.labelStyle}
      // style={{ marginTop: props.noMargin ? "0" : "30px" }}
      className={`static-form-label ${props.className} ${
        props.bold ? "bold" : ""
      }`}
    >
      <InputLabel
        // size="small"
        error={props.error}
        sx={{
          fontSize: ".8rem",
          fontWeight: 400,
          opacity: "1",
          ...props.labelStyle,
        }}
        // sx={{ fontSize: ".8rem", fontWeight: 600, opacity: ".8" }}
      >
        {props.label || props.children}
        {props.isRequired && "*"}
      </InputLabel>
    </div>
  );
};

export default FormLabel;
