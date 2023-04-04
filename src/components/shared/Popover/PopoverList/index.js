import React from "react";
import "./PopoverList.css";

const PopoverList = (props) => {
  return (
    <ul
      id="popover-list"
      style={props.style}
      className={`${props.topBorder && "top-border"} ${
        props.bottomBorder && "bottom-border"
      }`}
    >
      {React.Children.map(props.children, (c) => (
        <li>{c}</li>
      ))}
    </ul>
  );
};

export default PopoverList;
