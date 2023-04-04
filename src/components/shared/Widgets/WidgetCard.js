import React from "react";
import BorderCard from "../BorderCard";

const WidgetCard = ({ children, style, sx }) => {
  return (
    <BorderCard style={{ padding: "18px", ...style, ...sx }}>
      {children}
    </BorderCard>
  );
};

export default WidgetCard;
