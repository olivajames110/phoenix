import React from "react";
import "./ProgressBar.css";

const ProgressBar = (props) => {
  return (
    <div id="progress-bar" className="arrow-form-progress-bar">
      {props.children}
    </div>
  );
};

export default ProgressBar;
