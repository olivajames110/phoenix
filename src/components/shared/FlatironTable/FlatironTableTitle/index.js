import React from "react";
import "./FlatironTableTitle.css";

const FlatironTableTitle = (props) => {
  return (
    <div
      style={{ paddingTop: "0px", paddingBottom: "0px", ...props.style }}
      id={props.id}
      className="flatiron-table-title"
    >
      {props.title ? <h2 style={props.titleStyle}>{props.title}</h2> : null}
      {props.children ? props.children : null}
    </div>
  );
};

export default FlatironTableTitle;
