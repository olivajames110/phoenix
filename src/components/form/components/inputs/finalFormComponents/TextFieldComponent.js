import { FormControl, FormHelperText, TextField } from "@mui/material";
import React from "react";
import { useFormState } from "react-final-form";
// import "./input.css";
import { useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
import { isNil } from "lodash";
import { NumericFormat } from "react-number-format";
import FormField from "../../shared/FormField/FormField";
import RenderCount from "../../RenderCount/RenderCount";
import { useMemo } from "react";
const _ = require("lodash");
const useStyles = makeStyles({
  root: {
    fontSize: "8px",
  },
});

export const TextFieldComponent = React.memo((props) => {
  // const [isModified, setIsModified] = useState(false);
  // const [currentValue, setCurrentValue] = useState(null);
  // const [originalValue, setOriginalValue] = useState(null);
  const formData = useSelector((state) => state.formData);
  const { values } = useFormState();
  const memo_formData = useMemo(() => formData, [formData]);
  const memo_values = useMemo(() => values, [values]);

  const {
    input: { name, value, ...restInput },
    meta,
    label,
    items,
    FormControlProps,
    noMargin,
    onChange,
    isRequired,
    iconOnClick,
    icon,
    helperText,
    id,
    ...rest
  } = props;
  // console.log("fieldState", props);

  const currentValue = useMemo(
    () => _.get(memo_values, name),
    [memo_values, name]
  );
  const originalValue = useMemo(
    () => _.get(memo_formData, name),
    [memo_formData, name]
  );

  // const isModified =
  //   props.editable && String(currentValue) !== String(originalValue)
  //     ? true
  //     : false;

  const isModified = useMemo(
    () =>
      props.editable && String(currentValue) !== String(originalValue)
        ? true
        : false,
    [props.editable, currentValue, originalValue, values]
  );
  const handleDefaultInputChange = (e) => {
    let targetVal = e.target.value;

    let val = targetVal;
    let original = isNil(originalValue) ? "" : originalValue;
    let isModified = _.isEqual(original, val);

    if (onChange) {
      console.log(
        "%c ----------- BEFORE SEND -----------",
        "background: #dbdf9c;",
        { name, val, isModified }
      );
      onChange(name, val, isModified);
    }
  };

  const handleDefaultInputNumberChange = (e) => {
    let targetVal = e;

    let val = isNil(targetVal) ? "" : targetVal;

    let original = isNil(originalValue) ? "" : originalValue;
    let isModified = _.isEqual(String(original), String(val));

    if (onChange) {
      onChange(name, val, isModified);
    }
  };

  let inputIcon = null;

  if (props.dollar === true || props.dollar === "true") {
    inputIcon = {
      inputComponent: NumberFormatDollar,
    };
  }
  if (props.percent === true || props.percent === "true") {
    inputIcon = {
      inputComponent: NumberFormatPercent,
    };
  }

  return (
    <>
      <FormField
        className={`${isModified ? "modified" : ""} ${
          props.display ? "display-field" : ""
        } ${props.slim ? "slim" : ""} ${
          (meta.active || meta.dirty || (meta.valid && value !== "")) &&
          "active"
        }`}
        // {...props}
      >
        {/* <RenderCount /> */}
        <FormControl
          fullWidth={props.fullWidth ? props.fullWidth : true}
          variant="filled"
        >
          <TextField
            id={name}
            label={label}
            size="small"
            variant="filled"
            fullWidth={props.fullWidth ? props.fullWidth : true}
            placeholder={props.placeholder}
            onChange={
              props.dollar || props.percent
                ? handleDefaultInputNumberChange
                : handleDefaultInputChange
            }
            value={value}
            inputProps={restInput}
            color={isModified ? "warning" : "secondary"}
            focused={isModified}
            error={meta.error && meta.touched}
            InputProps={props.dollar || props.percent ? inputIcon : null}
            // {...rest}
            // {...props}
          />

          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          {meta.error && meta.touched && (
            <span className="error">{meta.error}</span>
          )}
        </FormControl>
      </FormField>
    </>
  );
});

const NumberFormatDollar = (props) => {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      onValueChange={(formattedValue) =>
        props.onChange(formattedValue.floatValue)
      }
      value={props.value}
      valueIsNumericString
      thousandSeparator
      prefix="$"
    />
  );
};
const NumberFormatPercent = (props) => {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      onValueChange={(formattedValue) =>
        props.onChange(formattedValue.floatValue)
      }
      value={props.value}
      valueIsNumericString
      thousandSeparator
      suffix="%"
    />
  );
};
