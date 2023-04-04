import React, { useReducer } from "react";
import { Field } from "react-final-form";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
// import "./input.css";
import { updateDocuments } from "../../../../../redux/actions/documentsActions";
import { useDispatch, useSelector } from "react-redux";
import FormField from "../FormField/FormField";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    fontSize: "8px",
  },
});

const NonFormTextField = (props) => {
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
  // const required = (value) => (value ? undefined : "Required");
  return (
    <Field
      initialValue={props.value || ""}
      name={props.name}
      validate={props.validate}
      parse={props.parse}
    >
      {({ input, meta }) => (
        <FormField
          className={`dynamic-input  ${
            (meta.active || meta.dirty || (meta.valid && input.value !== "")) &&
            "active"
          }`}
          noMargin={noMargin}
        >
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
              type={type}
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
            {meta.error && meta.touched && (
              <span className="error">{meta.error}</span>
            )}
          </FormControl>
        </FormField>
      )}
    </Field>
  );
};

export default NonFormTextField;
