import { Container } from "@mui/system";
import React from "react";

const ScreenBody = ({ noBodyPadding, style, children, sx }) => {
  const styles = {
    //screen-body
    padding: noBodyPadding ? 0 : "14px 0",
    ...style,
  };
  return (
    <Container sx={{ ...styles, ...sx }} maxWidth={false}>
      {children}
    </Container>
  );
  // return (
  //   <section style={styles} className="screen-body">
  //     <Container maxWidth={false}> {children}</Container>
  //   </section>
  // );
};

export default ScreenBody;
