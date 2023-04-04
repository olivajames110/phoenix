import React from "react";
import DisplayDataFieldItemValue from "../DisplayDataFieldItemValue/DisplayDataFieldItemValue";
import "./DisplayDataFieldItem.css";
const _ = require("lodash");
const DisplayDataFieldItem = ({
  label,
  value,
  id,
  row,
  large,
  dot,
  style,
  children,
}) => {
  const itemValue =
    value === undefined ||
    value === null ||
    value === "null" ||
    value === "undefined" ||
    value === ""
      ? "—"
      : value;

  // if (_.isNil(value)) {
  //   return null;
  // }
  return (
    <div
      id={id}
      style={style}
      className={`display-data-field-item ${row ? "row" : ""} ${
        large ? "large" : ""
      }`}
    >
      {label !== "hide" && (
        <span className="display-data-field-item__label">
          {label}
          {dot ? ": " : null}
        </span>
      )}
      {value !== "hide" && (
        <DisplayDataFieldItemValue>{itemValue}</DisplayDataFieldItemValue>
      )}
      {children ? (
        <DisplayDataFieldItemValue>{children}</DisplayDataFieldItemValue>
      ) : null}
    </div>
  );
};

export default DisplayDataFieldItem;
