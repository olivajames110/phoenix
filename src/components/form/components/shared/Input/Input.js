import React, { useReducer } from "react";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import "./input.css";
import { updateDocuments } from "../../../../../redux/actions/documentsActions";
import { useDispatch, useSelector } from "react-redux";
import FormField from "../FormField/FormField";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
      };
    default:
      return state;
  }
};

const Input = ({
  type,
  value,
  onBlur,
  onChange,
  keyName,
  ariaLabel,
  iconOnClick,
  showError,
  icon,
  label,
  onKeyDown,
  onFocus,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });
  const documents = useSelector((state) => state.documents);
  // const dispatch = useDispatch();

  //Functions
  const handleDefaultInputChange = (e) => {
    console.log("Change", keyName, e.target.value);
    dispatch(updateDocuments({ key: keyName, value: e.target.value }));
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
    <FormField>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          fullWidth
          id="outlined-adornment-password"
          type={type}
          value={value}
          onChange={onChange ? onChange : handleDefaultInputChange}
          error={showError}
          endAdornment={icon && inputIcon}
          label={label}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
        />
      </FormControl>
    </FormField>
  );
};

export default Input;
