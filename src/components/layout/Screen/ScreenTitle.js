import React from "react";

const ScreenTitle = (props) => {
  const titleStyles = {
    fontFamily: "var(--mont) !important",
    color: "var(--blue)",
    fontWeight: 700,
    fontSize: " 1.4rem",
    lineHeight: "2.4rem",
    textTransform: "capitalize",
  };
  return (
    <div className="dashboard-screen-page-title">
      <h1 style={titleStyles}>{props.title}</h1>
    </div>
  );
};

export default ScreenTitle;
