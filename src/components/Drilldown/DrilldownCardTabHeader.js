import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const DrilldownCardTabHeader = (props) => {
  const title = (
    <Typography
      variant="h3"
      sx={{
        // marginBottom: "10px ",
        width: "initial",
        fontSize: "1.2rem",
        fontWeight: "700",
        letterSpacing: 0,
        fontFamily: "var(--mont)",
        color: "#CC4100 !important",
      }}
    >
      {props.children}
    </Typography>
  );
  const titleContentWithHeader = (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      {title}
      {props.headerContent}
    </Stack>
  );
  return (
    <Box
      sx={{
        // background: "#e8ecf0e6",
        borderBottom: "4px solid #e8ecf0e6",
        padding: props.headerBodyContent ? "18px 10px 0" : "18px 10px 12px",
      }}
    >
      {props.headerContent ? titleContentWithHeader : title}
      {props.headerBodyContent ? (
        <Box marginTop="10px">{props.headerBodyContent}</Box>
      ) : null}
    </Box>
  );
};

export default DrilldownCardTabHeader;
