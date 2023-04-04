import { FileUploadRounded } from "@mui/icons-material";
import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./LoanProgressBar.css";

const LoanProgressBar = (props) => {
  const [step, setStep] = useState(1);
  return (
    <Stepper
      sx={{ flexGrow: 1, marginLeft: "0 !important" }}
      id="loan-progress-bar"
      alternativeLabel={true}
      activeStep={step}
    >
      <Step>
        <StepLabel sx={{ fontSize: ".7rem" }}>Submit Loan App</StepLabel>
      </Step>
      <Step>
        <StepLabel sx={{ fontSize: ".7rem" }}>Credit Authorization</StepLabel>
      </Step>
      <Step>
        <StepLabel
          // StepIconComponent={FileUploadRounded}
          sx={{ fontSize: ".7rem" }}
        >
          Upload Files
        </StepLabel>
      </Step>
      <Step>
        <StepLabel sx={{ fontSize: ".7rem" }}>Underwriting Review</StepLabel>
      </Step>
      <Step>
        <StepLabel sx={{ fontSize: ".7rem" }}>Completed</StepLabel>
      </Step>
    </Stepper>
  );
};

export default LoanProgressBar;
