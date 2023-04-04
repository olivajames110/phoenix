import EmailOutlined from "@mui/icons-material/EmailOutlined";
import React from "react";
import { Field, useFormState } from "react-final-form";
import { fieldNames } from "../../../../../global/forms/fieldNames";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MIN_CHAR,
  VALIDATOR_REQUIRE,
} from "../../../../../helpers/validators/inputValidators";
import { FormInput } from "../../shared/FormInput/FormInput";
import { TextboxFieldComponent } from "../finalFormComponents/TextboxFieldComponent";
// import "./Email.css";

const composevalidate =
  (...validate) =>
  (value) =>
    validate.reduce((error, validator) => error || validator(value), undefined);

const EmailAddressField = (props) => {
  const { values } = useFormState();

  return (
    <Field
      validate={composevalidate(VALIDATOR_REQUIRE, VALIDATOR_EMAIL)}
      name={fieldNames.emailAddress}
      label="Email Address"
      icon={<EmailOutlined />}
      noMargin={props.noMargin}
      component={TextboxFieldComponent}
      {...props}
    />
  );
};

export default EmailAddressField;
