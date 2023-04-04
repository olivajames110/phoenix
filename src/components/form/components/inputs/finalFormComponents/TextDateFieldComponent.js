import { FormControl, FormHelperText, TextField } from "@mui/material";
import React, { useState } from "react";
import { useFormState } from "react-final-form";
// import "./input.css";
import { useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { dateIsValid } from "../../../../../helpers/dateIsValid";
import { parseDateStringToIsoString } from "../../../../../helpers/parseDateStringToIsoString";
import { parseISOString } from "../../../../../helpers/parseISOString";
import { parseISOToDate } from "../../../../../helpers/parseISOToDate";
import FormField from "../../shared/FormField/FormField";
const _ = require("lodash");

export const TextDateFieldComponent = (props) => {
  const formData = useSelector((state) => state.formData);

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

  const { values } = useFormState();

  const parseDate = (string) => {
    if (string === undefined || string === null) {
      return string;
    }
    if (dateIsValid(string)) {
      let d = new Date(String(string));
      return d.toISOString();
    }
    return string;
  };

  const originalValue = parseDate(_.get(formData, name));
  const currentValue = parseDate(_.get(values, name));

  const handleDefaultInputChange = (e) => {
    let val = e.target.value;
    console.log(
      "%c ----------- DATE PICKER CHANGE -----------",
      "background: #dbdf9c;",
      val
    );

    if (onChange) {
      const isoString = parseDateStringToIsoString(val);

      const readableDate = parseISOToDate(isoString);
      console.log(
        "%c ----------- readableDate -----------",
        "background: #dbdf9c;",
        readableDate
      );

      let isModified = !_.isEqual(readableDate, val);
      // let isModified = _.isEqual(originalValue, val);
      // onChange(name, currentValue, isModified);
      // const custom = {
      //   value: currentValue,
      //   name: name,
      // };
      // onChange(undefined, undefined, custom);
      // onChange(e, props);
    }
  };

  // const currentValue =
  //   props.type === "date"
  //     ? parseDate(_.get(values, name))
  //     : _.get(values, name);

  useEffect(() => {}, [values]);

  const isModified =
    props.editable &&
    !_.isEqual(parseISOString(currentValue), parseISOString(originalValue))
      ? true
      : undefined;

  return (
    <>
      <FormField
        className={`${isModified ? "modified" : ""}  ${
          (meta.active || meta.dirty || (meta.valid && value !== "")) &&
          "active"
        }`}
        {...props}
      >
        <FormControl
          fullWidth={props.fullWidth ? props.fullWidth : true}
          variant="filled"
        >
          <TextField
            fullWidth={props.fullWidth ? props.fullWidth : true}
            onChange={handleDefaultInputChange}
            id={name}
            placeholder={props.placeholder}
            value={value}
            inputProps={restInput}
            {...rest}
            error={meta.error && meta.touched}
            label={label}
            size="small"
            variant="filled"
          />

          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          {meta.error && meta.touched && (
            <span className="error">{meta.error}</span>
          )}
        </FormControl>
      </FormField>
    </>
  );
};
