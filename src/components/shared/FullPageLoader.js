import { CircularProgress } from "@mui/material";
import React from "react";

const styles = {
  position: "fixed",
  backgroundColor: "#f5f6fa",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const FullPageLoader = (props) => {
  return (
    <div style={styles} className="full-page-loader-wrapper">
      <CircularProgress />
    </div>
  );
};

export default FullPageLoader;
