import React from "react";
import { Field } from "react-final-form";
import { fieldNames } from "../../../../../global/forms/fieldNames";
import { VALIDATOR_REQUIRE } from "../../../../../helpers/validators/inputValidators";
import { TextboxFieldComponent } from "../finalFormComponents/TextboxFieldComponent";
// import "./LastNameField.css";

const LastNameField = (props) => {
  return (
    // <TextField
    //   isRequired
    //   name={fieldNames.lastName}
    //   label="Last Name"
    // />
    <Field
      validate={VALIDATOR_REQUIRE}
      name={fieldNames.lastName}
      label="Last Name"
      component={TextboxFieldComponent}
      {...props}
    />
  );
};

export default LastNameField;
