import React from "react";
import FormField from "../form/components/shared/FormField/FormField";

const TextOverflow = (props) => {
  const containerStyles = {
    position: "relative",
    maxHeight: "200px",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    overflow: "hidden",
    borderRadius: "4px",
    textAlign: "left",
  };
  const overflowStyles = {
    padding: "12px 10px",
    maxHeight: "inherit",
    overflowY: "auto",
  };
  return (
    <div id={props.id} className="text-overflow">
      <FormField fieldLabel={props.title} noMargin={props.noMargin}>
        <div style={containerStyles} className="text-overflow-container">
          <div style={overflowStyles} className="overflow-inner-wrapper">
            {props.children}
          </div>
        </div>
      </FormField>
    </div>
  );
};

export default TextOverflow;
