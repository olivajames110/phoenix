import React from "react";
import "./FlatironTableOuterHeader.css";

const FlatironTableOuterHeader = (props) => {
  return <div className="doc-group-table-card__header">{props.children}</div>;
};

export default FlatironTableOuterHeader;
