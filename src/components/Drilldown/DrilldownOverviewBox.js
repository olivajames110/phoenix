import React from "react";

const DrilldownOverviewBox = (props) => {
  const styles = {
    background: "#1c456a14",
    display: "flex",
    padding: " 4px 12px",
    gap: "30px",
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #bebdbd59",
    // border: 1px solid #1c456a1a;
  };
  return (
    <div style={styles} className="drilldown-overview-box">
      {props.children}
    </div>
  );
};

export default DrilldownOverviewBox;
