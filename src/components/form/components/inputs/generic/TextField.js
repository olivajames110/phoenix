import React from "react";
import { FormInput } from "../../shared/FormInput/FormInput";
// import "./TextField.css";
import { useFormState } from "react-final-form";
import { VALIDATOR_REQUIRE } from "../../../../../helpers/validators/inputValidators";

const TextField = (props) => {
  const { values } = useFormState();

  return (
    <FormInput
      validate={props.isRequired && VALIDATOR_REQUIRE}
      name={props.name}
      label={props.label}
      noMargin={props.noMargin}
      value={values[props.name] || props.value}
      {...props}
    />
  );
};

export default TextField;
