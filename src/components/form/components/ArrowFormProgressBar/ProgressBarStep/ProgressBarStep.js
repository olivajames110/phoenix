import React from "react";
import "./ProgressBarStep.css";
import { ReactComponent as CheckMark } from "../../../../../assets/svgs/checkMark.svg";

const ProgressBarStep = (props) => {
  const { currentFormStep, step, index } = props;
  const handleStepClick = () => {
    if (!props.notClickable && props.setFormStep !== undefined) {
      console.log("click");
      props.setFormStep(index + 1);
    }
  };
  return (
    <div
      style={{
        cursor:
          !props.notClickable && props.setFormStep !== undefined
            ? "pointer"
            : "default",
      }}
      onClick={handleStepClick}
      className={`form-step  ${currentFormStep === index + 2 && "previous"} ${
        currentFormStep === index + 1 && "active"
      } ${currentFormStep > index + 1 && "passed"}`}
    >
      <span className="step-title">{step}</span>
      {(currentFormStep === index + 2 || currentFormStep > index + 1) && (
        <div className="checkmark-wrapper">
          <CheckMark />
        </div>
      )}
      <div className="form-step__arrow">
        <div className="arrow" id="arrow-filled">
          {progressBarArrow}
        </div>
        <div className="arrow" id="arrow-border">
          {progressBarArrowNoFill}
        </div>
      </div>
    </div>
  );
};

export default ProgressBarStep;
const progressBarArrow = (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.11 59.05"
  >
    <path d="M16.17,32.85L0,59.05V0L16.17,26.2c1.26,2.04,1.26,4.61,0,6.64Z" />
  </svg>
);
const progressBarArrowNoFill = (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18.71 64.52"
  >
    <path
      id="No_Fill"
      d="M.5,1.76v1.67l15.66,25.4c1.3,2.1,1.3,4.76,0,6.86L.5,61.09v1.67l16.69-27.07c1.3-2.1,1.3-4.76,0-6.86L.5,1.76H.5Z"
    />
  </svg>
);
