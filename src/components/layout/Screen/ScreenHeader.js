import { Container } from "@mui/material";
import React from "react";

const ScreenHeader = (props) => {
  const styles = {
    position: "relative",
    width: "100%",
    zIndex: 11,
    backgroundColor: "#ffffff",
    boxShadow: "0 0 3px 1px rgba(0, 0, 0, 0.094)",
    paddingTop: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  return (
    <header id={props.id} style={styles} className={"dashboard-screen-header"}>
      <Container maxWidth={false}>{props.children}</Container>
    </header>
  );
};

export default ScreenHeader;
