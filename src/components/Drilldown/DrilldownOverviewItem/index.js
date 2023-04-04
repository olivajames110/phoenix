import React from "react";
import "./DrilldownOverviewItem.css";

const DrilldownOverviewItem = ({ label, value, id, row, children }) => {
  const itemValue =
    value === undefined ||
    value === null ||
    value === "null" ||
    value === "undefined" ||
    value === ""
      ? "—"
      : value;
  return (
    <div id={id} className={`drilldown-overview-item ${row ? "row" : ""}`}>
      {label !== "hide" && (
        <span className="drilldown-overview-item__label">{label}</span>
      )}
      {value !== "hide" && (
        <span className="drilldown-overview-item__value">{itemValue}</span>
      )}
      {children ? (
        <span className="drilldown-overview-item__value">{children}</span>
      ) : null}
    </div>
  );
};

export default DrilldownOverviewItem;
