import React from "react";
import { Field } from "react-final-form";
import { fieldNames } from "../../../../../global/forms/fieldNames";
import { VALIDATOR_REQUIRE } from "../../../../../helpers/validators/inputValidators";
import { TextboxFieldComponent } from "../finalFormComponents/TextboxFieldComponent";
// import { TextboxField } from "../generic/TextboxField"
// import "./FirstNameField.css";

const FirstNameField = (props) => {
  return (
    // <TextField
    //   isRequired
    //   name={fieldNames.firstName}
    //   label="First Name"
    // />
    <Field
      validate={VALIDATOR_REQUIRE}
      name={fieldNames.firstName}
      label="First Name"
      component={TextboxFieldComponent}
      {...props}
    />
  );
};

export default FirstNameField;
