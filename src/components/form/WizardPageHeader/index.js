import React from "react";
import "./WizardPageHeader.css";

const WizardPageHeader = (props) => {
  return <h3 className="wizard-page-header">{props.children}</h3>;
};

export default WizardPageHeader;
