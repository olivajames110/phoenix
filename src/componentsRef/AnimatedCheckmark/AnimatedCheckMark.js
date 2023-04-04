import { Cancel } from "@mui/icons-material";
import React from "react";

import "./AnimatedCheckmark.css";

const AnimatedCheckmark = (props) => {
  return (
    <div style={props.style} className="w4rAnimated_checkmark">
      {props.fail ? (
        <Cancel
          sx={{
            fill: "red",
            width: "28px",
            height: "28px",
            marginBottom: "5px",
          }}
        />
      ) : (
        <svg
          fill={props.fill}
          style={props.svgStyle}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.2 130.2"
        >
          <circle
            className="path circle"
            fill="none"
            stroke="#73AF55"
            strokeWidth="6"
            strokeMiterlimit="10"
            cx="65.1"
            cy="65.1"
            r="62.1"
          />
          <polyline
            className="path check"
            fill="none"
            stroke="#73AF55"
            strokeWidth="6"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="100.2,40.2 51.5,88.8 29.8,67.5 "
          />
        </svg>
      )}
    </div>
  );
};

export default AnimatedCheckmark;
