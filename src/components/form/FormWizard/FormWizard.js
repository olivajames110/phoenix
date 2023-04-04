import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { isNil, isString } from "lodash";
import React from "react";
import ErrorMessage from "../../shared/ErrorMessage";

import SnackbarAlert from "../../shared/SnackbarAlert/SnackbarAlert";
import MuiStepper from "../components/MuiStepper";
import Form from "../Form/Form";
import WizardPageHeader from "../WizardPageHeader";

import "./FormWizard.css";

const FormWizard = (props) => {
  //Form state
  const [formStep, setFormStep] = React.useState(1);
  const isFinalStep = formStep === props.formSteps.length;

  //Result state
  const [formStatusIsSaving, setFormStatusIsSaving] = React.useState(false);
  const bodyRef = document.querySelector(
    ".MuiDialogContent-root.css-ok43d2-MuiDialogContent-root"
  );
  // const { values } = useFormState();

  //Functions
  const nextStepHandler = (state) => {
    if (formStep < props.formSteps?.length) {
      if (!isNil(bodyRef)) {
        bodyRef.scrollTo(0, 0);
      }
      setFormStep((s) => s + 1);
    }

    if (isFinalStep) {
      console.log("---------------FORM TYPE Submitting-----------------");
      props.onSubmit(state);
    }
  };

  const previousStepHandler = () => {
    console.log("Back");
    if (!isNil(bodyRef)) {
      bodyRef.scrollTo(0, 0);
    }
    if (formStep > 1) {
      setFormStep((s) => s - 1);
    }
  };

  let submitButtonText = props.submitButtonText
    ? props.submitButtonText
    : "Submit";

  return (
    <div className="form-wizard-wrapper">
      <Form
        id={"form-wizard"}
        // initialValues={borrowerProfile}
        keepDirtyOnReinitialize={props.keepDirtyOnReinitialize}
        initialValues={props.initialValues || {}}
        formStatusIsSaving={formStatusIsSaving}
        onClick={nextStepHandler}
        // submitButtonText={props.submitButtonText}
        hideButton
        formSpyRaw={props.formSpyRaw}
        formSpy={props.formSpy}
      >
        <div className="wizard-inner-wrapper">
          {props.formSteps?.length >= 1 && (
            <MuiStepper
              clickable={props.clickable}
              formStep={formStep}
              setFormStep={setFormStep}
              formSteps={props.formSteps}
              alt={props.alt}
            />
          )}

          {props.formSteps?.length === 1 && props.formSteps}

          <div
            className={`wizard-content-area ${
              props.readOnly ? "read-only" : ""
            }`}
          >
            {props.formSteps?.map(
              (s, i) =>
                formStep === i + 1 && (
                  <div key={s.pageHeader} className="wizard__pages">
                    {!props.hidePageHeader && (
                      <WizardPageHeader key={s.pageHeader}>
                        {s.pageHeader}
                      </WizardPageHeader>
                    )}
                    {s.stepComponent}
                  </div>
                )
            )}

            {!props.readOnly ? (
              <div style={{ position: "relative" }} className="wizard__buttons">
                <SnackbarAlert
                  open={props.showFail}
                  // onClose={() => setIsSuccess(null)}
                  message={"Form could not be submitted"}
                  sx={{
                    position: "relative",
                    // bottom: "5px !important",
                    // marginTop: "30px !important",
                  }}
                  // anchorPosition="center"
                  type={"error"}

                  // anchorPosition="right"
                />
                <Stack direction={"row"} justifyContent="space-between">
                  <Button
                    sx={{ visibility: formStep === 1 ? "hidden" : "visible" }}
                    onClick={previousStepHandler}
                    variant="text"
                    startIcon={<ChevronLeft />}
                  >
                    Back
                  </Button>

                  <LoadingButton
                    type="submit"
                    onClick={() => setFormStatusIsSaving(false)}
                    variant="contained"
                    loading={props.isLoading}
                    endIcon={!isFinalStep ? <ChevronRight /> : null}
                  >
                    {isFinalStep ? submitButtonText : "Continue"}
                  </LoadingButton>
                </Stack>
              </div>
            ) : null}
          </div>
        </div>

        {props.children}
        {isString(props.error) && !isNil(props.error) && (
          <ErrorMessage show={props.error} message={props.error} />
        )}
      </Form>
    </div>
  );
};

export default FormWizard;
