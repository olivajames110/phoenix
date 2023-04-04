import { Box, Container } from "@mui/material";
import React from "react";
import ScreenSubTitle from "../ScreenSubTitle";

const ScreenSubTitleSection = ({ children, sx }) => {
  return (
    <Container sx={{ padding: "30px 0 0", ...sx }} maxWidth={false}>
      <Box>
        <ScreenSubTitle>{children}</ScreenSubTitle>
      </Box>
    </Container>
  );
};

export default ScreenSubTitleSection;
