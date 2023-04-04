import React from "react";
import FormLabel from "../FormLabel/FormLabel";
import "./FormGroup.css";

const FormGroup = (props) => {
  return (
    <div
      id={props.id}
      style={props.formGroupStyle}
      className={`form-group ${props.showError && "error"} ${
        props.noMargin && "no-margin"
      } ${props.bottomBorder && "bottom-border"}`}
    >
      {props.fieldLabel || props.label ? (
        <FormLabel {...props} className="form-field-label form-group-label">
          {props.fieldLabel}
        </FormLabel>
      ) : null}
      {props.children}
    </div>
  );
};

export default FormGroup;
// style={{ padding: "0 5px", marginBottom: '-5px' }}
