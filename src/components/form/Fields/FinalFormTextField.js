import { FormControl, FormHelperText, TextField } from "@mui/material";
import { get, isNil } from "lodash";
import React, { useState } from "react";
import { Field } from "react-final-form";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import RenderCount from "../components/RenderCount/RenderCount";
import FormField from "../components/shared/FormField/FormField";

/**
 * Example:
 *  <FinalFormTextField
        label="Requested Loan amount"
        name={`${fieldNames.requestedLoanAmount}`}
        dollar
    />
 */

const FinalFormTextField = ({
  name,
  label,
  validate,
  fullWidth,
  dollar,
  percent,
  helperText,
  placeholder,
  onChange,
  editable,
  count,
}) => {
  const [isModified, setIsModified] = useState(false);
  let inputIcon = null;
  const formData = useSelector((state) => state.formData);
  const formDataUpdate = useSelector((state) => state.formDataUpdate);
  const dispatch = useDispatch();

  const originalValue = get(formData, name);
  const updatedValue = isNil(get(formDataUpdate, name))
    ? originalValue
    : get(formDataUpdate, name);

  // const isModified =
  //   String(originalValue) === String(updatedValue) ? false : true;

  console.log("originalValue", String(originalValue));
  console.log("updatedValue", String(updatedValue));
  console.log("isModified", isModified, editable);

  // const isModified =

  const handleOnChange = (e) => {
    let val = dollar || percent ? e : e.target.value;
    const inputIsModified = val === originalValue ? false : true;
    if (inputIsModified) {
      setIsModified(true);
      // dispatch(
      //   removeFormDataUpdate({
      //     key: name,
      //     // key: parseBracketToDotNotation(name),
      //     value: val,
      //   })
      // );
    } else {
      setIsModified(false);
      // dispatch(
      //   addFormDataUpdate({
      //     key: name,
      //     // key: parseBracketToDotNotation(name),
      //     value: val,
      //   })
      // );
    }
    console.log("CHANGED");

    const params = {
      name,
      current: val,
      original: originalValue,
      isModified: inputIsModified,
      // current: val,
      // original: getObjectValueFromStringPath(formData, name),
    };
    console.log(params);
    if (onChange) {
      onChange(params);
    }
  };

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
            variant="filled"
          >
            <RenderCount />
            {count ? <RenderCount /> : null}
            {/* {console.log(input.value)} */}
            <TextField
              id={name}
              label={label}
              size="small"
              variant="filled"
              fullWidth={fullWidth ? fullWidth : true}
              placeholder={placeholder}
              color={editable && isModified ? "warning" : "secondary"}
              focused={editable && isModified}
              error={meta.error && meta.touched}
              InputProps={dollar || percent ? inputIcon : null}
              {...input}
              onChange={(e) => {
                input.onChange(e); //final-form's onChange
                // console.log("val", e);
                if (onChange) {
                  //props.onChange
                  handleOnChange(e);
                  // handleOnChange(e);
                }
              }}
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

export default React.memo(FinalFormTextField);
