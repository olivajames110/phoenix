import {
  AddCircleOutlineOutlined,
  CheckRounded,
  ChevronRight,
  ChevronRightRounded,
  CloseRounded,
} from "@mui/icons-material";
import { Badge, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

// import "./TickerWidget.css";

const TickerWidget = (props) => {
  const status = props.isValid ? (
    <CheckRounded sx={{ width: "1rem", height: ".9rem" }} />
  ) : (
    <CloseRounded sx={{ width: "1rem", height: "1rem" }} />
  );

  const badge = (
    <Box
      sx={{
        background: "#1c456a14",
        borderRadius: "2px",
        padding: "25px",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {props.icon}
    </Box>
  );

  const content = (
    <Stack
      // padding="10px 0 10px 15px"
      justifyContent={"space-between"}
      height="100%"
    >
      <Typography
        sx={{
          fontWeight: 600,
          opacity: 0.6,
          fontSize: ".7rem",
          textTransform: "uppercase",
        }}
        variant="h4"
      >
        {props.title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "1.2rem",
        }}
        variant="h4"
      >
        {props.icon}
        {props.value}
      </Typography>
    </Stack>
  );
  return (
    <Box
      sx={{
        position: "relative",
        background: "#ffffff",
        border: "var(--border)",
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        width: "100%",
        height: "100%",
        padding: "25px 20px ",
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction="row"
        height={"100%"}
      >
        {/* {badge} */}
        {content}
        {/* <Stack
          paddingTop={"5px"}
          direction={"row"}
          alignItems="center"
          color={props.isValid ? "var(--green)" : "var(--red)"}
        >
          <Typography
            sx={{ marginRight: "4px", color: "inherit" }}
            variant="body1"
          >
            {props.label}
          </Typography>
          {status}
        </Stack> */}
      </Stack>
    </Box>
  );
};

export default TickerWidget;
