import {
  CheckRounded,
  ChevronRightRounded,
  CloseRounded,
} from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

// import "./SecondaryCtaWidget.css";

const SecondaryCtaWidget = (props) => {
  const status = props.isValid ? (
    <CheckRounded sx={{ width: "1rem", height: ".9rem" }} />
  ) : (
    <CloseRounded sx={{ width: "1rem", height: "1rem" }} />
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
        justifyContent: "center",
      }}
    >
      <Button
        disabled={props.disabled}
        // variant="outlined"

        sx={{
          opacity: props.disabled ? ".75" : "1",
          // padding: "40px 0 20px",
          height: "100%",
          flexGrow: 1,
          color: "#242526",
          padding: "20px 10px",
        }}
        onClick={props.onClick}
      >
        <Stack justifyContent={"center"} alignItems={"center"}>
          {props.icon ? <Box pb={"10px"}>{props.icon}</Box> : null}
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: 600,
              textAlign: "center",
            }}
            variant="h4"
          >
            {props.title} {props.isValid ? null : <ChevronRightRounded />}
          </Typography>
          <Stack
            // sx={{ opacity: ".8" }}
            paddingTop={"5px"}
            direction={"row"}
            alignItems="center"
            display={"flex"}
            justifyContent="center"
            color={props.isValid ? "var(--green)" : "var(--red)"}
          >
            <Typography
              sx={{ marginRight: "4px", color: "inherit", textAlign: "center" }}
              variant="body1"
            >
              {props.label}
            </Typography>
            {status}
          </Stack>
        </Stack>
      </Button>
    </Box>
  );
};

export default SecondaryCtaWidget;
