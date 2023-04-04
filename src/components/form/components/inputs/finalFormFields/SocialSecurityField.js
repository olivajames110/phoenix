import { RemoveRedEye, RemoveRedEyeOutlined } from "@mui/icons-material";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import React, { useState } from "react";
import { Field, useFormState } from "react-final-form";
import { fieldNames } from "../../../../../global/forms/fieldNames";
import { parseSSN } from "../../../../../helpers/parse/parseSSN";
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

const SocialSecurityField = (props) => {
  const [showNumber, setShowNumber] = useState(false);
  const { values } = useFormState();

  return (
    <Field
      validate={VALIDATOR_REQUIRE}
      name={fieldNames.ssn}
      parse={parseSSN}
      // format={formatSSN}
      label="Social Security Number"
      noMargin={props.noMargin}
      // icon={showNumber ? <RemoveRedEye /> : <RemoveRedEyeOutlined />}
      // iconOnClick={() => setShowNumber((s) => !s)}
      // type={showNumber ? "text" : "password"}
      component={TextboxFieldComponent}
      {...props}
    />
  );
};

export default SocialSecurityField;
