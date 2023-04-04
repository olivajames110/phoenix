import React, { useReducer } from "react";
import { Field } from "react-final-form";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
// import "./input.css";
import { updateDocuments } from "../../../../../redux/actions/documentsActions";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
import RenderCount from "../../RenderCount/RenderCount";
import FormField from "../../shared/FormField/FormField";
const useStyles = makeStyles({
  root: {
    fontSize: "8px",
  },
});

export const TextboxFieldComponent = (props) => {
  const { id, input, meta, fieldState, ...rest } = props;
  const {
    type,
    value,
    onBlur,
    onChange,
    keyName,
    ariaLabel,
    iconOnClick,
    showError,
    noMargin,
    icon,
    label,
    onKeyDown,
    onFocus,
  } = props;

  // console.log("fieldState", props, input);
  const classes = useStyles();

  //Functions
  const handleDefaultInputChange = (e) => {
    console.log("Change", keyName, e.target.value);
    // dispatch(updateDocuments({ key: keyName, value: e.target.value }));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //Components
  const inputIcon = iconOnClick ? (
    <InputAdornment position="end">
      <IconButton
        aria-label={ariaLabel}
        onClick={iconOnClick}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {icon}
      </IconButton>
    </InputAdornment>
  ) : (
    <InputAdornment position="end">{icon}</InputAdornment>
  );

  return (
    <>
      <FormField
        className={`dynamic-input display-field ${
          props.display && "display-field"
        } ${
          (meta.active || meta.dirty || (meta.valid && input.value !== "")) &&
          "active"
        } `}
        noMargin={noMargin}
      >
        {/* <RenderCount /> */}
        {/* {props.label && <FormLabel>{props.label}</FormLabel>} */}
        <FormControl fullWidth variant="outlined">
          <InputLabel
            sx={{ fontSize: ".8rem", fontWeight: 600, opacity: ".6" }}
            size="small"
            htmlFor="outlined-adornment-password"
          >
            {label}
            {props.isRequired && "*"}
          </InputLabel>
          <OutlinedInput
            fullWidth
            // size="small"
            id="outlined-adornment-password"
            type={"textarea"}
            value={value}
            onChange={onChange ? onChange : handleDefaultInputChange}
            error={meta.error && meta.touched}
            endAdornment={icon && inputIcon}
            label={label}
            onBlur={onBlur}
            className={classes.root}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            isRequired
            size="small"
            margin="dense"
            {...input}
          />
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
