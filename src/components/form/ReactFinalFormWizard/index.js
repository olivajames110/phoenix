import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { isArray, isNil, isString } from "lodash";
import React from "react";
import ErrorMessage from "../../shared/ErrorMessage";

import ReactFinalForm from "../ReactFinalForm";
import WizardPageHeader from "../WizardPageHeader";

import FormWizardStepper from "./FormWizardStepper";

const ReactFinalFormWizard = ({
  isLoading,
  onSubmit,
  id,
  formSteps,
  initialValues,
  submitButtonText,
  formSpy,
  clickable,
  hidePageHeader,
  alt,
  children,

  formSpyRaw,
  error,
}) => {
  //Form state
  const [activeFormStep, setActiveFormStep] = React.useState(1);
  const isFinalStep = activeFormStep === formSteps.length;

  //Functions
  const nextStepHandler = (state) => {
    console.log("activeFormStep", activeFormStep);
    console.log(" formSteps?.length", formSteps?.length);

    if (activeFormStep < formSteps?.length) {
      setActiveFormStep((s) => s + 1);
    }

    if (isFinalStep) {
      onSubmit(state);
    }
  };

  const previousStepHandler = () => {
    console.log("Back");
    if (activeFormStep > 1) {
      setActiveFormStep((s) => s - 1);
    }
  };

  let buttonText = submitButtonText ? submitButtonText : "Submit";

  const UI_EL__STEPPER = (
    <FormWizardStepper
      formSteps={formSteps}
      activeFormStep={activeFormStep}
      setActiveFormStep={setActiveFormStep}
      ///
      clickable={clickable}
      alt={alt}
    />
  );

  const UI_EL__BUTTONS = (
    <Stack direction={"row"} justifyContent="space-between">
      <Button
        sx={{ visibility: activeFormStep === 1 ? "hidden" : "visible" }}
        onClick={previousStepHandler}
        variant="text"
        startIcon={<ChevronLeft />}
      >
        Back
      </Button>

      <LoadingButton
        type="submit"
        variant="contained"
        loading={isLoading}
        endIcon={!isFinalStep ? <ChevronRight /> : null}
      >
        {isFinalStep ? submitButtonText : "Continue"}
      </LoadingButton>
    </Stack>
  );

  const UI_EL__FORM_STEPS =
    isNil(formSteps) || !isArray(formSteps) ? null : (
      <Box sx={{ padding: "20px 0" }}>
        {formSteps?.map(
          (s, i) =>
            activeFormStep === i + 1 && (
              <div key={s.pageHeader} className="wizard__pages">
                {!hidePageHeader && (
                  <WizardPageHeader key={s.pageHeader}>
                    {s.pageHeader}
                  </WizardPageHeader>
                )}
                {s.stepComponent}
              </div>
            )
        )}
      </Box>
    );
  return (
    <ReactFinalForm
      id={id}
      isLoading={isLoading}
      onSubmit={onSubmit}
      subscription={{ submitting: true, pristine: true, values: true }}
      // keepDirtyOnReinitialize={props.keepDirtyOnReinitialize}
      initialValues={initialValues || {}}
      onClick={nextStepHandler}
      submitButtonText={buttonText}
      hideButton
      formSpy={formSpy}
      formSpyRaw={formSpyRaw}
    >
      {UI_EL__STEPPER}
      {UI_EL__FORM_STEPS}
      {UI_EL__BUTTONS}
      {children}
      {isString(error) && !isNil(error) && (
        <ErrorMessage show={error} message={error} />
      )}
    </ReactFinalForm>
  );
};

export default ReactFinalFormWizard;
