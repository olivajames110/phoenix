import React from "react";
import { useRef } from "react";
import "./AppHeader.css";

const AppHeader = (props) => {
  let navRef = useRef(null);
  return (
    <header
      ref={navRef}
      style={props.style}
      id={props.id}
      className={`app-header ${props.white ? "white" : "blue"} ${
        props.className
      }`}
    >
      {props.children}
    </header>
  );
};

export default AppHeader;
