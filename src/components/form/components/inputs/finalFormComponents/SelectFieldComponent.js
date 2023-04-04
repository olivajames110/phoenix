import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { useFormState } from "react-final-form";
// import "./input.css";
import { useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
import FormField from "../../shared/FormField/FormField";
import { get, isEqual } from "lodash";

export const SelectFieldComponent = (props) => {
  const formData = useSelector((state) => state.formData);
  const { values } = useFormState();

  const {
    input: { name, value, ...restInput },
    meta,
    label,
    items,
    FormControlProps,
    noMargin,
    onChange,
    isRequired,

    id,
    onSelectChange,
    multiple,
    ...rest
  } = props;

  const currentValue = get(values, name);
  const originalValue = get(formData, name);

  const isModified =
    props.editable && String(currentValue) !== String(originalValue)
      ? true
      : undefined;

  const handleDefaultInputChange = (e) => {
    let val = e.target.value;
    let isModified = isEqual(originalValue, val);
    if (onChange) {
      // onChange(e, props);
      onChange(name, val, isModified);
      // onChange(name, originalValue, val);
    }
    if (onSelectChange) {
      onSelectChange(e);
    }
  };
  return (
    <>
      <FormField
        className={`${isModified ? "modified" : ""} ${
          props.display && "display-field"
        } ${
          (meta.active || meta.dirty || (meta.valid && value !== "")) &&
          "active"
        }`}
        {...props}
      >
        {/* <RenderCount /> */}

        <FormControl fullWidth variant="filled">
          {props.label && (
            <InputLabel
              // sx={{ fontSize: ".8rem", fontWeight: 600, opacity: ".6" }}
              size="small"
              htmlFor={name}
            >
              {label}
              {isRequired && "*"}
            </InputLabel>
          )}

          <Select
            // {...rest}
            name={name}
            labelId={name}
            id={id}
            error={meta.error && meta.touched}
            multiple={multiple ? true : false}
            size="small"
            label={label}
            value={value}
            // helperText="Incorrect entry."
            variant="filled"
            color={isModified ? "warning" : "secondary"}
            focused={isModified}
            inputProps={restInput}
            onChange={handleDefaultInputChange}
            // focused={true}
          >
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            {items.map((i) => {
              return typeof i === "string" ? (
                <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
              ) : (
                <MenuItem key={i.name} value={i.name}>
                  {i.label}
                </MenuItem>
              );
            })}
          </Select>

          {props.helperText && (
            <FormHelperText>{props.helperText}</FormHelperText>
          )}
          {meta.error && meta.touched && (
            <span className="error">{meta.error}</span>
          )}
        </FormControl>
      </FormField>
    </>
  );
};
// export default TextboxFormComponent;
