import { Box } from "@mui/material";
import React from "react";
import ScreenSubTitle from "../../../layout/Screen/ScreenSubTitle";
import WidgetCard from "../WidgetCard";
import WidgetCardHeader from "../WidgetCardHeader";
import WidgetTitle from "../WidgetTitle";

// import "./PrimaryWidget.css";

const PrimaryWidget = ({ title, children }) => {
  return (
    <WidgetCard
      sx={{
        position: "relative",
        background: "#ffffff",
        border: "var(--border)",
        display: "flex",
        // alignItems: "center",
        padding: 0,
        // flexGrow: 1,
        width: "100%",
        // justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <WidgetCardHeader sx={{ borderBottom: "var(--border)" }} title={title} />
      <div className="dialog-body">{children}</div>
    </WidgetCard>
  );
};

export default PrimaryWidget;
