import React from "react";
import "./WizardPageSubHeader.css";

const WizardPageSubHeader = (props) => {
  return <h4 className="wizard-page-sub-header">{props.children}</h4>;
};

export default WizardPageSubHeader;
