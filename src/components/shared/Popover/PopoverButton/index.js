import React from "react";
import "./PopoverButton.css";

const PopoverButton = (props) => {
  return (
    <button
      style={props.style}
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      className={`popover-button ${props.className} ${
        props.disabled ? "disabled" : ""
      }`}
    >
      {props.icon && <span className="popover-button__icon">{props.icon}</span>}
      <div className="popover-button__text">{props.children}</div>
    </button>
  );
};

export default PopoverButton;
