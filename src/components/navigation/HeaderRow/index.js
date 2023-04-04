import { Container } from "@mui/material";
import React from "react";
// import "./HeaderRow.css";

const HeaderRow = (props) => {
  const navWidth = props.fullWidth ? false : props.maxWidth;
  return (
    <Container sx={{ padding: "8px 0" }} maxWidth={navWidth}>
      {props.children}
    </Container>
  );
};

export default HeaderRow;
