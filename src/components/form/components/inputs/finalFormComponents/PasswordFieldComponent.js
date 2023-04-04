import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useForm, useFormState } from "react-final-form";
// import "./input.css";
import { useSelector } from "react-redux";

import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useEffect } from "react";
import { checkIfInputHasChanges } from "../../../../../forms/helpers/checkIfInputHasChanged";
import FormField from "../../shared/FormField/FormField";
const _ = require("lodash");

export const PasswordFieldComponent = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
  // console.log("fieldState", props);

  const { values } = useFormState();
  const { change } = useForm();

  const handleDefaultInputChange = (e) => {
    if (props.editable) {
      let changeStatus = checkIfInputHasChanges(
        e.target.value,
        undefined,
        formData,
        name
      );

      // console.log("formValue", props);

      if (changeStatus) {
        setIsEditing(true);
      } else {
        setIsEditing(false);
      }
    }
  };

  useEffect(() => {
    if (props.editable) {
      let formDataValue = _.get(values, name);
      let changeStatus = checkIfInputHasChanges(
        formDataValue,
        undefined,
        formData,
        name
      );

      // console.log("formValue", props);

      if (changeStatus) {
        setIsEditing(true);
      } else {
        setIsEditing(false);
      }
    }
  }, [formData, values]);

  useEffect(() => {
    if (props.editable) {
      let formDataValue = _.get(values, name);
      let changeStatus = checkIfInputHasChanges(
        formDataValue,
        undefined,
        formData,
        name
      );

      // console.log("formValue", props);

      if (changeStatus) {
        setIsEditing(true);
      } else {
        setIsEditing(false);
      }
    }
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword((s) => !s);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* <SnackbarAlert
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Save Successful!"
        sx={{ bottom: "44px !important" }}
        anchorPosition="left"
      /> */}
      <FormField
        className={`${props.display ? "display-field" : null} ${
          props.slim && "slim"
        } ${
          (meta.active || meta.dirty || (meta.valid && value !== "")) &&
          "active"
        }`}
        {...props}
      >
        {/* <RenderCount /> */}
        {/* {props.label && <FormLabel>{props.label}</FormLabel>} */}
        <FormControl
          fullWidth={props.fullWidth ? props.fullWidth : true}
          variant="filled"
        >
          <TextField
            fullWidth={props.fullWidth ? props.fullWidth : true}
            onChange={onChange ? onChange : handleDefaultInputChange}
            // size="small"
            id={name}
            type={showPassword ? "text" : "password"}
            // disableUnderline
            placeholder={props.placeholder}
            value={value}
            inputProps={restInput}
            {...rest}
            error={meta.error && meta.touched}
            // endAdornment={saveIcon}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ marginRight: 0 }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffOutlined
                        sx={{ height: "18px", width: "18px" }}
                      />
                    ) : (
                      <VisibilityOutlined
                        sx={{ height: "18px", width: "18px" }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            // endAdornment={icon && inputIcon}
            // label={label}
            // labelId={name}
            // className={classes.root}
            label={label}
            size="small"
            variant="filled"
            // margin="dense"
            // {...input}
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
