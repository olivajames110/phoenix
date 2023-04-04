import React from "react";
import WidgetCard from "../shared/Widgets/WidgetCard";

const DrilldownCard = (props) => {
  return (
    <WidgetCard
      style={{ height: "100%", overflow: "unset", padding: 0, ...props.sx }}
    >
      {props.children}
    </WidgetCard>
  );
};

export default DrilldownCard;
