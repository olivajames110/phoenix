import React from "react";
import ProgressBar from "./ProgressBar";
// import "./ArrowFormProgressBar.css";
import ProgressBarStep from "./ProgressBarStep/ProgressBarStep";

const ArrowFormProgressBar = (props) => {
  return (
    <ProgressBar>
      {props.formSteps.map((step, i) => (
        <ProgressBarStep
          currentFormStep={props.currentFormStep}
          step={step.stepName}
          index={i}
          notClickable={props.notClickable}
          setFormStep={props.setFormStep}
        />
      ))}
    </ProgressBar>
  );
};

export default ArrowFormProgressBar;
