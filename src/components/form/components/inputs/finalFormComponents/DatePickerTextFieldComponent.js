import { FormControl, FormHelperText, OutlinedInput } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useEffect } from "react";
import { useForm, useFormState } from "react-final-form";
import "./styles/DatePickerTextFieldComponent.css";

import { makeStyles } from "@mui/styles";

import { dateIsValid } from "../../../../../helpers/dateIsValid";
import { parseISOString } from "../../../../../helpers/parseISOString";
import FormField from "../../shared/FormField/FormField";
import FormLabel from "../../shared/FormLabel/FormLabel";
import { TextDateFieldComponent } from "./TextDateFieldComponent";
import { parseISOToDate } from "../../../../../helpers/parseISOToDate";
import { parseDateStringToIsoString } from "../../../../../helpers/parseDateStringToIsoString";
import { useSelector } from "react-redux";
const _ = require("lodash");
const useStyles = makeStyles({
  root: {
    fontSize: "8px",
  },
});

export const DatePickerTextFieldComponent = (props) => {
  const [value, setValue] = React.useState(null);
  const formData = useSelector((state) => state.formData);

  const { change } = useForm();

  const parseDate = (string) => {
    // console.log("date string", string);
    if (string === undefined || string === null) {
      return string;
    }
    if (dateIsValid(string)) {
      let d = new Date(String(string));
      return d.toISOString();
    }
    return string;
  };

  const isValidDate = (d) => {
    return d instanceof Date && !isNaN(d);
  };
  const originalValue = parseDate(_.get(formData, props.input.name));
  const onChangeHandler = (val) => {
    console.log("🚀 DatePickerTextFieldComponent val", isValidDate(val));
    if (isValidDate(val)) {
      if (props.onChange) {
        const originalValIsoString = parseDateStringToIsoString(originalValue);
        const readableDateOriginal = parseISOToDate(originalValIsoString);

        const currentValIsoString = parseDateStringToIsoString(val);
        const readableDateCurrent = parseISOToDate(currentValIsoString);

        let isModified = _.isEqual(readableDateCurrent, readableDateOriginal);
        props.onChange(props.input.name, val, isModified);
      }
      setValue(val);
      change(props.input.name, val);
    }
  };

  useEffect(() => {
    if (props.input.value) {
      setValue(parseISOString(props.input.value));
    }
  }, [props.input]);
  // useEffect(() => {
  //   if (props.input.value) {
  //     setValue(parseISOString(props.input.value));
  //   }
  // }, [props.input]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={props.label}
        value={value} //Tue Nov 30 0202 00:00:00 GMT-0456 (Eastern Standard Time)
        // value={parseISOString(value)}
        onChange={(newValue) => {
          onChangeHandler(newValue);
        }}
        renderInput={(params) => (
          // <TextDateFieldComponent
          //   id="date-picker"
          //   type="date"
          //   editable={props.editable}
          //   // value={value}
          //   // formValue={getObjectValueFromStringPath(values, props.input.name)}
          //   value={parseISOString(value)}
          //   {...params}
          //   {...props}
          // />
          <TextDateFieldComponent
            id="date-picker"
            type="date"
            // editable={props.editable}

            value={parseISOString(value)}
            {...params}
            {...props}
          />
        )}
        // renderInput={(params) => (
        //   <TextFieldComponent
        //     id="date-picker"
        //     editable={props.editable}
        //     value={parseISOString(value)}
        //     {...params}
        //     {...props}
        //   />
        // )}
        // renderInput={(params) => (
        //   <DatePickerField value={value} {...params} {...props} />
        // )}
      />
    </LocalizationProvider>
  );
};

const DatePickerField = (props) => {
  const { id, input, meta, fieldState, value, noMargin, ...rest } = props;

  const classes = useStyles();
  console.log("DatePickerProps", props);

  return (
    <>
      {props.slim ? (
        <div className="slim">
          <input
            className={meta.error && meta.touched && "error"}
            {...props.inputProps}
            value={props.inputProps.value}
            type="text"
            placeholder="—"
            ref={props.inputRef}
          />
          {props.InputProps.endAdornment}
        </div>
      ) : (
        <FormField noMargin={noMargin}>
          {/* <RenderCount /> */}
          {props.label && (
            <FormLabel>
              {props.label}
              {props.isRequired && "*"}
            </FormLabel>
          )}
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              fullWidth
              // size="small"
              ref={props.inputRef}
              id="outlined-adornment-password"
              type={"textarea"}
              name={props.input.name}
              onChange={() => console.log("asdasdasd")}
              error={meta.error && meta.touched}
              endAdornment={props.InputProps.endAdornment}
              className={classes.root}
              isRequired
              size="small"
              margin="dense"
              {...props.inputProps}
              value={props.inputProps.value}
              // {...input}
            />

            {props.helperText && (
              <FormHelperText>{props.helperText}</FormHelperText>
            )}
            {meta.error && meta.touched && (
              <span className="error">{meta.error}</span>
            )}
          </FormControl>
        </FormField>
      )}
    </>
  );
};
// export default TextboxFormComponent;
