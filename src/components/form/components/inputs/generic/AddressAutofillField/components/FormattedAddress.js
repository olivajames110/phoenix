import React from "react";
import { useFormState } from "react-final-form";
import PseudoInput from "../../../../../../shared/PseudoInput/PseudoInput";
import FormLabel from "../../../../shared/FormLabel/FormLabel";

const FormattedAddress = (props) => {
  const checkIfUndefined = (val) =>
    props.address?.[val] === undefined ? "" : props.address[val];

  // console.log("props.address", props.address);

  let formatted = `${checkIfUndefined("streetNumber")} ${checkIfUndefined(
    "streetName"
  )} ${checkIfUndefined("city")}${
    `${checkIfUndefined("streetName") && checkIfUndefined("city")}` && ","
  } ${checkIfUndefined("state")} ${checkIfUndefined("zip")} ${checkIfUndefined(
    "country"
  )}`;

  return (
    <>
      {props.className ? (
        formatted
      ) : (
        // <div className={props.className}>{formatted}</div>
        <PseudoInput label={props.label}>{formatted}</PseudoInput>
      )}
    </>
  );
};

export default FormattedAddress;
