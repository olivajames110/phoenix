import React from "react";
import { Field, useFormState } from "react-final-form";
import { FormInput } from "../../shared/FormInput/FormInput";
// import "./TextField.css";
import { removeFormatting } from "../../../../../helpers/phoneNumber/removeFormatting";
import { formatPhoneNum } from "../../../../../helpers/phoneNumber/formatPhoneNumber";
import { VALIDATOR_REQUIRE } from "../../../../../helpers/validators/inputValidators";
import { PhoneOutlined } from "@mui/icons-material";
import { fieldNames } from "../../../../../global/forms/fieldNames";

const PhoneNumber = (props) => {
  // const onChangeHandler = (e) => {
  //   let value = e.target.value;
  //   if (e.target.value.length <= 14) {
  //     dispatch(
  //       updateDocuments({
  //         key: "phoneNumber",
  //         value: removeFormatting(value),
  //       })
  //     );
  //   }
  //   if (formState.phoneNumber.length === 9) {
  //     setShowError(false);
  //   }
  // };

  const normalizePhone = (value) => {
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
  const { values } = useFormState();
  return (
    // <Field
    //   name="phone"
    //   component="input"
    //   type="text"
    //   parse={normalizePhone}
    //   placeholder="(999) 999-9999"
    // />

    <FormInput
      validate={props.isRequired && VALIDATOR_REQUIRE}
      name={props.name ? props.name : fieldNames.phoneNumber}
      label={props.label ? props.label : "Phone Number"}
      keyName={"phoneNumber"}
      icon={<PhoneOutlined />}
      ariaLabel={"Phone Number"}
      parse={normalizePhone}
      value={values[props.name]}
      {...props}
    />
  );
};

export default PhoneNumber;
