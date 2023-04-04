import { FormControl, FormHelperText, TextField } from "@mui/material";
import React from "react";
// import "./input.css";

import { makeStyles } from "@mui/styles";
import FormField from "../../shared/FormField/FormField";

export const TextareaFieldComponent = (props) => {
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

  // const required = (value) => (value ? undefined : "Required");
  return (
    <>
      <FormField
        id="text-area-field-component"
        className={` ${
          (meta.active || meta.dirty || (meta.valid && value !== "")) &&
          "active"
        }`}
        {...props}
      >
        {/* <RenderCount /> */}
        <FormControl fullWidth variant="">
          <TextField
            fullWidth
            type={"textarea"}
            value={value}
            error={meta.error && meta.touched}
            rows={3}
            multiline
            label={label}
            size="small"
            variant="filled"
            inputProps={restInput}
            // {...rest}
          />

          {props.minChar && (
            <FormHelperText>{`${value.length} of ${props.minChar}`}</FormHelperText>
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
