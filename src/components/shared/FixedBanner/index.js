import { Toolbar } from "@mui/material";
import React from "react";
import "./FixedBanner.css";
import { CloseOutlined } from "@mui/icons-material";

const FixedBanner = (props) => {
  const { onClose } = props;
  return (
    <Toolbar id={props.id} className={`fixed-banner ${props.className}`}>
      <div className="tool-bar-inner-wrapper">
        {props.numSelected && (
          <div className="unsaved-changed-container">
            <span>You have</span>
            <div className="num-items-selected">
              <div className="value center">{props.numSelected}</div>
            </div>
            <span>{`modified value${props.numSelected > 1 ? "s" : ""}`}</span>
          </div>
        )}
        {props.children}
      </div>
      <div id="close" className="button-wrapper">
        <button onClick={onClose}>
          <CloseOutlined />
        </button>
      </div>
    </Toolbar>
  );
};

export default FixedBanner;
