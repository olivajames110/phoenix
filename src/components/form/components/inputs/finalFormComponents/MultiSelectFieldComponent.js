import React, { useReducer } from "react";
import { Field } from "react-final-form";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
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

export const MultiSelectFieldComponent = (props) => {
  const {
    input: { name, value, onChange, ...restInput },
    meta,
    label,
    items,
    FormControlProps,
    noMargin,
    isRequired,
    helperText,
    id,
    multiple,
    ...rest
  } = props;
  // console.log("fieldState", props, input);
  const classes = useStyles();

  return (
    <>
      <FormField
        className={`  ${
          (meta.active || meta.dirty || (meta.valid && value !== "")) &&
          "active"
        }`}
        {...props}
      >
        <FormControl fullWidth variant="filled">
          <InputLabel size="small" htmlFor={name}>
            {label}
            {isRequired && "*"}
          </InputLabel>
          <Select
            {...rest}
            name={name}
            labelId={name}
            id={id}
            multiple={multiple ? true : false}
            // error={true}
            label={label}
            value={[...value]}
            helperText="Incorrect entry."
            variant="filled"
            inputProps={restInput}
            onChange={onChange}
          >
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            {items.map((i) => (
              <MenuItem value={i}>{i}</MenuItem>
            ))}
          </Select>
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          {meta.error && meta.touched && (
            <span className="error">{meta.error}</span>
          )}
        </FormControl>
      </FormField>
    </>
  );
};
// export default TextboxFormComponent;
