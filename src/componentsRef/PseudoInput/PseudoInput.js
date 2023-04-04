import React from "react";
import FormLabel from "../../form/components/shared/FormLabel/FormLabel";
import "./PseudoInput.css";

const PseudoInput = (props) => {
  return (
    <div
      id={props.id}
      className={`pseudo-input-wrapper ${props.label && "label"}`}
    >
      {props.label && <FormLabel>{props.label}</FormLabel>}
      <span>{props.children}</span>
    </div>
  );
};

export default PseudoInput;
