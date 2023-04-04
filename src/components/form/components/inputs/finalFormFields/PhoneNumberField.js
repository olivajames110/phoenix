import { PhoneOutlined } from "@mui/icons-material";
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

const normalizePhone = (value) => {
  console.log("PHONE NUM RUN");
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 3) return onlyNums;
  if (onlyNums.length <= 7)
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 7)}`;
  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(
    6,
    10
  )}`;
};

const PhoneNumberField = (props) => {
  const { values } = useFormState();

  return (
    <Field
      validate={VALIDATOR_REQUIRE}
      name={props.name || fieldNames.phoneNumber}
      label="Phone Number"
      icon={<PhoneOutlined />}
      parse={normalizePhone}
      component={TextboxFieldComponent}
      {...props}
    />
  );
};

export default PhoneNumberField;
