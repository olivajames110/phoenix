import { Box } from "@mui/material";
import React from "react";

const MaxWidthTableCell = (props) => {
  return (
    <Box
      sx={{
        maxWidth: props.width ? props.width : "200px",
        fontSize: ".7rem",
      }}
    >
      {props.children}
    </Box>
  );
};
export default MaxWidthTableCell;
