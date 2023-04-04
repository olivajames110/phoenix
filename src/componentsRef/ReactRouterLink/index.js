import React from "react";
import { Link } from "react-router-dom";

import "./ReactRouterLink.css";

const ReactRouterLink = (props) => {
  const icon = (
    <div className="icon-wrapper">{props.iconRight || props.iconLeft}</div>
  );
  return (
    <Link
      id={props.id}
      onClick={props.onClick}
      className={`router-link ${props.className}`}
      to={props.to}
    >
      {props.iconLeft && icon}
      <span>{props.children}</span>
      {props.iconRight && icon}
    </Link>
  );
};

export default ReactRouterLink;
