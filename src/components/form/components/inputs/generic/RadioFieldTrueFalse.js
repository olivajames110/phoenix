import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
} from "@mui/material";
import React from "react";
import { Field, useFormState } from "react-final-form";
import { VALIDATOR_REQUIRE } from "../../../../../helpers/validators/inputValidators";
import EditableFieldWrapper from "../../shared/EditableFieldWrapper";
import FormField from "../../shared/FormField/FormField";
import FormLabel from "../../shared/FormLabel/FormLabel";
import RadioField from "./RadioField/RadioField";

const RadioFieldTrueFalse = (props) => {
  const { values, errors, submitFailed } = useFormState();

  const showError = submitFailed && errors[props.name];
  return (
    <FormField
      fieldLabel={props.fieldLabel}
      id="radio-field"
      className={`${props.display ? "display-field" : null} ${
        props.slim && "slim"
      }  `}
      {...props}
    >
      <FormControl fullWidth variant="filled">
        <EditableFieldWrapper {...props}>
          <div
            className={`radio-field-options ${
              props.vertical ? "vertical" : ""
            }`}
          >
            <Field
              name={props.name}
              type="radio"
              validate={props.isRequired && VALIDATOR_REQUIRE}
              value={"true"}
              component={RadioItem}
              // component="input"
            >
              {props.items[0]}
            </Field>
            <Field
              name={props.name}
              type="radio"
              validate={props.isRequired && VALIDATOR_REQUIRE}
              value={"false"}
              component={RadioItem}
              // component="input"
            >
              {props.items[1]}
            </Field>
          </div>
        </EditableFieldWrapper>
      </FormControl>
      {showError && <span className="error">Required</span>}
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </FormField>
  );
};

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
          // size="small"
        />
      }
      label={children}
    />
  );
};

export default RadioFieldTrueFalse;
