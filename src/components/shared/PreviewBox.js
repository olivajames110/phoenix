import React from "react";
import { Box } from "@mui/system";

const PreviewBox = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#80808024",
        borderRadius: "4px",
        padding: "6px 15px",
        marginBottom: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {props.children}
    </Box>
  );
};

export default PreviewBox;
