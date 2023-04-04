import React, { useEffect } from "react";
import FormField from "../../../shared/FormField/FormField";
import { Field } from "react-final-form";
// import { Radio } from "final-form-material-ui";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useFormState } from "react-final-form";

import "./RadioField.css";
import { VALIDATOR_REQUIRE } from "../../../../../../helpers/validators/inputValidators";
import EditableFieldWrapper from "../../../shared/EditableFieldWrapper";
import { getObjectValueFromStringPath } from "../../../../../../helpers/getObjectValueFromStringPath";

const RadioField = (props) => {
  const { values, errors, submitFailed } = useFormState();

  const showError =
    submitFailed &&
    getObjectValueFromStringPath(values, props.name) === undefined;
  // const showError = submitFailed && errors[props.name];
  const onRadioChange = (e) => {
    console.log("change");
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <FormField
      fieldLabel={props.fieldLabel}
      id="radio-field"
      className={`${props.display ? "display-field" : ""} ${
        props.slim ? "slim" : ""
      }  `}
      {...props}
    >
      <FormControl fullWidth variant="filled">
        <FormLabel id="demo-radio-buttons-group-label">{props.label}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          // value={value}
          validate={props.isRequired && VALIDATOR_REQUIRE}
          onChange={onRadioChange}
        >
          <div
            className={`radio-field-options ${
              props.verticalOptions || props.vertical ? "vertical" : ""
            }`}
          >
            {props.items.map((o) => (
              <Field
                key={o}
                name={props.name}
                type={props.multiple ? "checkbox" : "radio"}
                validate={props.isRequired && VALIDATOR_REQUIRE}
                value={o}
                size="medium"
                component={RadioItem}
                // onChange={onRadioChange}
                {...props}
                // component="input"
              >
                {o}
              </Field>
            ))}
          </div>
        </RadioGroup>
      </FormControl>

      {showError && <span className="error">Required</span>}
    </FormField>
  );
};

export default RadioField;

const RadioItem = ({ input, children }) => {
  // console.log(children);

  return (
    <FormControlLabel
      control={
        <Radio
          sx={{
            fontSize: ".2rem",
            fontWeight: 600,
          }}
          {...input}
          size="medium"
        />
      }
      label={children}
    />
  );
};
