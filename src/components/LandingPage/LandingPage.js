import React from "react";
import Card from "../shared/Card";
import "./LandingPage.css";
import LandingPageHeader from "./LandingPageHeader";

// import FlatIronLogo from "../shared/FlatIronLogo/FlatIronLogo";
const LandingPage = (props) => {
  return (
    <section
      id={props.id}
      style={props.style}
      className={`landing-page ${props.className}`}
    >
      <Card style={props.cardStyle}>
        {!props.hideHeader && <LandingPageHeader {...props} />}
        <div className="landing-page__body">{props.children}</div>
      </Card>
    </section>
  );
};

export default LandingPage;
