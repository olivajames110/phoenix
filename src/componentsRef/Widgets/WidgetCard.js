import React from "react";
import BorderCard from "../BorderCard";

const WidgetCard = (props) => {
  return (
    <BorderCard style={{ padding: "18px", ...props.style }}>
      {props.children}
    </BorderCard>
  );
};

export default WidgetCard;
