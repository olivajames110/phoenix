// import createDecorator from "final-form-focus";
import React from "react";
import { Form as FinalForm, FormSpy } from "react-final-form";
// import { setDocuments } from "../../redux/actions/documentsActions";
import { LoadingButton } from "@mui/lab";
import arrayMutators from "final-form-arrays";
import { isNil, isString } from "lodash";
import ErrorMessage from "../../shared/ErrorMessage";
import { StackRowEnd } from "../../shared/MuiStack";
import FormResults from "../FormResults";

// import "./Form.css";

const Form = (props) => {
  const handleSubmit = (formObj) => {
    // console.log("formObj", formObj);
    const formType = { formType: props.formType };

    const customFormTypes = props.customFormTypes;
    const combinedState = { ...formObj, ...formType, ...customFormTypes };
    if (props.onClick) {
      props.onClick(combinedState);
      return;
    }
  };

  // const handleSave = (state) => {
  //   props.onSave(state)
  // }
  // const focusOnError = createDecorator();
  return (
    <FinalForm
      id={props.id}
      keepDirtyOnReinitialize
      initialValues={props.initialValues || undefined}
      onSubmit={handleSubmit}
      decorators={props.decorators}
      subscription={{ submitting: true, pristine: true }}
      mutators={{
        ...arrayMutators,
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form id={props.id} onSubmit={handleSubmit}>
          {/* ---Start Child Form ---*/}
          {props.children}
          {/*--- End Child Form ---*/}
          {!props.hideButton && (
            <StackRowEnd sx={{ marginTop: "15px" }}>
              <LoadingButton
                type="submit"
                variant="contained"
                loading={props.isLoading}
              >
                {props.submitButtonText || "Submit"}
              </LoadingButton>
            </StackRowEnd>
          )}
          {isString(props.errorMessage) && !isNil(props.errorMessage) && (
            <ErrorMessage
              show={props.errorMessage}
              message={props.errorMessage}
            />
          )}
          {(props.formSpy || props.formSpyRaw) && (
            <>
              <div
                style={{
                  position: "relative",
                  bottom: 0,
                  right: 0,
                }}
              >
                <FormSpy subscription={{ values: true }}>
                  {({ values }) => (
                    <FormResults
                      formSpyRaw={props.formSpyRaw}
                      values={values}
                    />
                  )}
                </FormSpy>
              </div>
            </>
          )}
        </form>
      )}
    />
  );
};

// export default Form;

export default React.memo(Form);
