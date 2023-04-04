import React from "react";
import { Field } from "react-final-form";
import { VALIDATOR_REQUIRE } from "../../../../../helpers/validators/inputValidators";
import { TextboxFieldComponent } from "../finalFormComponents/TextboxFieldComponent";
// import "./FirstNameField.css";

const NumberField = (props) => {
  const normalizePhone = (value) => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    return onlyNums;
  };
  return (
    <Field
      validate={props.isRequired && VALIDATOR_REQUIRE}
      name={props.name}
      parse={normalizePhone}
      helperText={props.helperText}
      noMargin={props.noMargin}
      format={props.format}
      component={TextboxFieldComponent}
      {...props}
    />
    // <TextField
    //   // validate={props.isRequired && VALIDATOR_REQUIRE}
    //   isRequired={props.isRequired}
    //   name={props.name}
    //   noMargin={props.noMargin}
    //   label={props.label}
    //   parse={normalizePhone}
    // />
  );
};

export default NumberField;
