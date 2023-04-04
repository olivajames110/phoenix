import React from "react";
import FormLabel from "../FormLabel/FormLabel";
import "./FormField.css";

const FormField = (props) => {
  const customStyles = {
    marginTop: props.fieldLabel ? (props.noMargin ? "0" : "20px") : "0px",
    ...props.styles,
  };

  return (
    <div
      id={props.id}
      style={customStyles}
      className={`form-field ${
        props.noSidePadding ? "no-side-padding" : ""
      } form-field ${props.vertical ? "vertical" : ""}  ${
        props.noPadding ? "no-padding" : ""
      }  ${props.noMargin ? "no-margin" : ""} ${props.className}`}
    >
      {props.fieldLabel && (
        <FormLabel className="form-field-label">{props.fieldLabel}</FormLabel>
      )}
      {props.children}
    </div>
  );
};

export default FormField;
