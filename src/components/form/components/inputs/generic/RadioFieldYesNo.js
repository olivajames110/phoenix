import React from "react";
import RadioField from "./RadioField/RadioField";

const RadioFieldYesNo = (props) => {
  return (
    <RadioField
      name={props.name}
      items={["No", "Yes"]}
      label={props.label}
      {...props}
    />
  );
};

export default RadioFieldYesNo;
