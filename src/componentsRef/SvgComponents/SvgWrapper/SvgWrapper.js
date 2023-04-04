import React from "react";
import "./SvgWrapper.css";

const SvgWrapper = (props) => {
  return (
    <div
      id={props.id}
      style={{
        width: props.width ? props.width : "20px",
        margin: props.center ? "0 auto" : "unset",
        ...props.style,
      }}
      className={`svg-icon-wrapper ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default SvgWrapper;
