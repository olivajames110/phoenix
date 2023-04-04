import { MobileStepper, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./MuiStepper.css";

const MuiStepper = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  // const [formSteps, setFormSteps] = useState([]);
  const isAlt = props.formSteps.length > 6 ? true : false;

  const handleStepClick = (index) => {
    let stepIndex = index + 1;

    if (props.clickable) {
      props.setFormStep(stepIndex);
    }
  };

  // useEffect(() => {
  //   let steps = [];
  //   let width = window.innerWidth;

  //   if (width < 600) {
  //     setIsMobile(true);
  //   }

  //   props.formSteps.forEach((s) => steps.push(s.stepName));
  //   console.log("steps", steps);
  //   setFormSteps(steps);
  //   console.log("width", width, props.formSteps, props.formStep);
  // }, []);

  const desktopStepper = (
    <div className="stepper-inner-wrapper">
      <Stepper
        id="form-stepper"
        // nonLinear={true}
        activeStep={props.formStep - 1}
        alternativeLabel={props.alt ? props.alt : isAlt}
      >
        {props.formSteps.map((step, index) => (
          <Step
            sx={{
              cursor: props.clickable ? "pointer !important" : "default",
            }}
            onClick={() => handleStepClick(index)}
            key={step.stepName}
            disabled={props.clickable ? false : true}
          >
            <StepLabel sx={{ fontSize: "7rem" }}>{step.stepName}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );

  const mobileStepper = (
    <MobileStepper
      variant="dots"
      sx={{ width: "100%", flexGrow: 1, justifyContent: "center" }}
      steps={props.formSteps.length}
      position="static"
      activeStep={props.formStep - 1}
    />
  );
  return (
    <div
      className={`mui-stepper-container ${props.alt ? "alternate" : ""} ${
        isAlt ? "extended" : "normal"
      }`}
    >
      {isMobile ? mobileStepper : desktopStepper}
    </div>
  );
};

export default MuiStepper;
