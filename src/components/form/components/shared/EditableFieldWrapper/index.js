import { AttachMoney } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "./EditableFieldWrapper.css";
const _ = require("lodash");

const EditableFieldWrapper = (props) => {
  const formData = useSelector((state) => state.formData);

  // console.log("%c ----------- Target -----------", "background: #dbdf9c;");
  // console.log("%c ----------- Target -----------", "background: #dbdf9c;");
  // console.log(
  //   "%c ----------- Target -----------",
  //   "background: #dbdf9c;",
  //   props.name
  // );
  // console.log("props.currentValue", props.currentValue);
  // console.log("props.originalValue", props.originalValue);

  const classNames = `${props.vertical ? "vertical" : ""} ${
    String(props.currentValue) !== String(props.originalValue) ? "unsaved" : ""
  }  ${props.select ? "select" : ""}  ${props.slim ? "slim" : ""}  ${
    props.displayValue ? "display-value" : ""
  }  ${props.fixedValue ? "fixed-value" : ""}  `;

  const displayValueContent =
    props.displayValue ===
    ("undefined" || undefined || "null" || null || "" || " ")
      ? "—"
      : props.displayValue;

  return (
    <>
      {props.display ? (
        <div
          id={props.id}
          style={props.style}
          className={`editable-field editing ${classNames}`}
          onClick={props.onClick}
          role={props.onClick ? "button" : null}
        >
          {props.label && (
            <span
              // onClick={() => setIsEditing(false)}
              className="editable-field__label"
            >
              {props.vertical ? props.label : `${props.label}:`}
              {/* {props.currentValue !== _.get(formData, props.name) && (
                <InputSave
                  style={{ position: "absolute", left: "105%", top: "50%" }}
                  row
                  // style={
                  //   props.absolute
                  //     ? {
                  //         position: "absolute",
                  //         right: "1px",
                  //         top: "-21px",
                  //       }
                  //     : null
                  // }
                  onSave={handleOnSave}
                  onReset={handleResetInput}
                  {...props}
                />
              )} */}
            </span>
          )}
          <span
            // onClick={() => setIsEditing(false)}
            className={`editable-field__value ${
              props.calculation && "calculation"
            }`}
          >
            {props.calculation && (
              <InputAdornment position="end">
                <AttachMoney />
              </InputAdornment>
            )}
            {props.displayValue && displayValueContent}
            {props.calculation ? props.calculationValue : props.children}
            {/* {props.currentValue !== _.get(formData, props.name) && (
              <InputSave
                // style={{ position: "absolute", right: "1px", top: "-23px" }}
                // row
                style={
                  props.absolute
                    ? {
                        position: "absolute",
                        right: "1px",
                        top: "-21px",
                      }
                    : null
                }
                onSave={handleOnSave}
                onReset={handleResetInput}
                {...props}
              />
            )} */}
          </span>
        </div>
      ) : (
        props.children
      )}
    </>
  );
};

export default EditableFieldWrapper;
