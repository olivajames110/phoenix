import React from "react";
import AnimatedCheckmark from "./AnimatedCheckmark/AnimatedCheckMark";
import SvgWrapper from "./SvgComponents/SvgWrapper/SvgWrapper";

const SuccessContent = (props) => {
  const successContentStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    flexDirection: "column",
    textAlign: "center",
  };
  return (
    <div style={successContentStyles} className="success-content">
      <div className="header-success-content">
        <SvgWrapper width={"72px"} center className="checkmark">
          <AnimatedCheckmark />
        </SvgWrapper>
        {props.message ? (
          <p style={{ marginTop: "15px" }} className="success-message">
            {props.message}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default SuccessContent;
