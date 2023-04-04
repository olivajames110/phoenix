import React from "react";
import "./DrilldownSection.css";

const DrilldownSection = (props) => {
  return (
    <section id={props.id} style={props.style} className="drilldown-section">
      {props.children}
      <div className="bottom-divider"></div>
    </section>
  );
};

export default DrilldownSection;
