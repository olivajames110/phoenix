import { FormControl, FormHelperText, TextField } from "@mui/material";
import React from "react";
import { Field } from "react-final-form";
import { NumericFormat } from "react-number-format";
import RenderCount from "../components/RenderCount/RenderCount";
import FormField from "../components/shared/FormField/FormField";

const FinalFormDateField = ({
  name,
  label,
  validate,
  fullWidth,
  dollar,
  percent,
  helperText,
  placeholder,
}) => {
  let inputIcon = null;

  if (dollar === true || dollar === "true") {
    inputIcon = {
      inputComponent: NumberFormatDollar,
    };
  }
  if (percent === true || percent === "true") {
    inputIcon = {
      inputComponent: NumberFormatPercent,
    };
  }
  return (
    <FormField fullWidth={fullWidth ? fullWidth : true}>
      <Field name={name} validate={validate}>
        {({ input, meta }) => (
          <FormControl
            fullWidth={fullWidth ? fullWidth : true}
            // fullWidth={props.fullWidth ? props.fullWidth : true}
            variant="filled"
          >
            <RenderCount />
            {console.log(input.value)}
            <TextField
              id={name}
              label={label}
              size="small"
              variant="filled"
              fullWidth={fullWidth ? fullWidth : true}
              placeholder={placeholder}
              color="secondary"
              error={meta.error && meta.touched}
              InputProps={dollar || percent ? inputIcon : null}
              {...input}
              // {...props}
            />

            {helperText && <FormHelperText>{helperText}</FormHelperText>}
            {meta.error && meta.touched && (
              <span className="error">{meta.error}</span>
            )}
          </FormControl>
        )}
      </Field>
    </FormField>
  );
};

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
      // isNumericString
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
      // isNumericString

      suffix="%"
    />
  );
};

export default React.memo(FinalFormDateField);
