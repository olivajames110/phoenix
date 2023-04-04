import { LoadingButton } from "@mui/lab";
import { FormControl, TextField } from "@mui/material";
import { isNil, isString } from "lodash";
import React from "react";
import { Field, Form, FormSpy } from "react-final-form";
import ErrorMessage from "../../shared/ErrorMessage";
import { StackRowEnd } from "../../shared/MuiStack";
import FormResults from "../FormResults";
import RenderCount from "../components/RenderCount/RenderCount";
import FormField from "../components/shared/FormField/FormField";

const ReactFinalForm = ({
  subscription,
  formSpy,
  id,
  onSubmit,
  children,
  hideButton,
  initialValues,
  errorMessage,
  isLoading,
  submitButtonText,
  count,
  formSpyRaw,
  onClick,
}) => {
  const handleSubmit = (formObj) => {
    onSubmit(formObj);
    if (onClick) {
      onClick(formObj);
    }
  };

  return (
    <Form
      subscription={subscription}
      initialValues={initialValues || undefined}
      onSubmit={handleSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form id={id} onSubmit={handleSubmit}>
          {count ? <RenderCount /> : null}
          {/* <FormGroup noMargin fieldLabel="Contact Information">
          <Field
                  validate={VALIDATOR_REQUIRE}
                  name={"firstName"}
                  label="First Name"
                  component={TextFieldComponent}
                />
          </FormGroup> */}

          {children}
          {!hideButton && (
            <StackRowEnd sx={{ marginTop: "15px" }}>
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isLoading}
              >
                {submitButtonText || "Submit"}
              </LoadingButton>
            </StackRowEnd>
          )}
          {isString(errorMessage) && !isNil(errorMessage) && (
            <ErrorMessage show={errorMessage} message={errorMessage} />
          )}
          {formSpy || formSpyRaw ? (
            <FormSpy subscription={{ values: true }}>
              {({ values }) => (
                <FormResults
                  formSpyRaw={formSpyRaw}
                  rendercount
                  values={values}
                />
              )}
            </FormSpy>
          ) : null}
        </form>
      )}
    />
  );
};

const FinalFormTextField = ({ name, label, validate, fullWidth }) => {
  return (
    <FormField fullWidth={fullWidth ? fullWidth : true}>
      <Field name={name} validate={validate}>
        {({ input, meta }) => (
          <FormControl
            fullWidth={fullWidth ? fullWidth : true}
            // fullWidth={fullWidth ? props.fullWidth : true}
            variant="filled"
          >
            <RenderCount />
            <TextField
              id={name}
              label={label}
              size="small"
              variant="filled"
              fullWidth={fullWidth ? fullWidth : true}
              // placeholder={props.placeholder}
              // onChange={
              //   props.dollar || props.percent
              //     ? handleDefaultInputNumberChange
              //     : handleDefaultInputChange
              // }
              // value={value}
              // inputProps={restInput}
              color="secondary"
              error={meta.error && meta.touched}
              // InputProps={props.dollar || props.percent ? inputIcon : null}
              // {...rest}
              {...input}
              // {...props}
            />

            {/* {helperText && <FormHelperText>{helperText}</FormHelperText>} */}
            {meta.error && meta.touched && (
              <span className="error">{meta.error}</span>
            )}
          </FormControl>
        )}
      </Field>
    </FormField>
  );
};

export default ReactFinalForm;
