import {
  AddBoxOutlined,
  AddBoxRounded,
  AddCircleOutlineOutlined,
  ChevronRight,
  ChevronRightRounded,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import BorderCard from "../../BorderCard";
import DashboardWidget from "../DashboardWidget";
import TickerWidgetStatus from "../TickerWidget/TickerWidgetStatus";
import WidgetCard from "../WidgetCard";
import WidgetTitle from "../WidgetTitle";
import WidgetCardHeader from "../WidgetCardHeader";
import MuiGrid from "../../MuiGrid";
import GridItem from "../../MuiGrid/GridItem";

const CtaWidget = (props) => {
  const graphic = (
    <Box sx={{ maxWidth: "180px", marginBottom: "20px" }}>
      <Badge badgeContent={props.count} color="secondary">
        {props.icon}
      </Badge>
    </Box>
  );

  // const status = props.statusLabel ? (
  //   <Box
  //     sx={{
  //       padding: "5px",
  //       position: "absolute",
  //       right: "10px",
  //       top: "10px",
  //       opacity: props.disabled ? ".55" : "1",
  //     }}
  //     size="small"
  //   >
  //     <TickerWidgetStatus label={props.statusLabel} value={props.statusValue} />
  //   </Box>
  // ) : null;

  const primaryNumber = (
    <Stack
      // flexBasis={"40%"}
      alignItems={"center"}
      justifyContent={"center"}
      // sx={{ padding: "0 0 0", paddingLeft: "12px" }}
      // flexShrink={0}
      flexBasis={"64%"}
      // flexGrow={0}
    >
      <Typography
        sx={{ marginTop: "5px", fontWeight: "700", fontSize: "2rem" }}
        variant="h2"
      >
        24K
      </Typography>
      <Typography
        sx={{
          marginTop: "2px",
          opacity: ".7",
          fontSize: ".7rem",
          fontWeight: "500",
        }}
        variant="body1"
      >
        Year To Date
      </Typography>
    </Stack>
  );
  const graph = (
    <Box
      sx={{
        display: "flex",
        background: "#4b4b4b17",
        alignItems: "center",
        justifyContent: "center",
        // width: "50%",
        flexBasis: "36%",
        // flexShrink: 1,
        // flexGrow: 1,
        height: "80px",
        borderRadius: "8px",
      }}
    >
      Graph
    </Box>
  );

  const bottomBar = (
    <Stack
      alignItems={"center"}
      sx={{ padding: "14px 0 8px", background: "#cc410017", width: "100%" }}
    >
      <WidgetTitle sx={{ color: "var(--black)", fontSize: ".8rem" }}>
        {props.title}
        <ChevronRightRounded />
      </WidgetTitle>
    </Stack>
  );

  const content = (
    <Stack padding="5px  0 10px" width="100%">
      {/* <Typography
        // padding="5px 10px 0"
        sx={{ fontSize: ".9rem", fontWeight: "600", textAlign: "left" }}
        variant="h3"
      >
        {props.title}
      </Typography> */}
      <Stack
        padding="10px"
        direction={"row"}
        alignItems={"center"}
        spacing={4}
        justifyContent={"space-evenly"}
        width="100%"
      >
        {primaryNumber}
        {graph}
      </Stack>
      {/* <Stack
        padding="10px"
        direction={"row"}
        alignItems={"center"}
        spacing={4}
        justifyContent={"space-evenly"}
        width="100%"
      >
        <MuiGrid>
          <GridItem size={5}>{primaryNumber}</GridItem>
          <GridItem size={7}>{graph}</GridItem>
        </MuiGrid>
      </Stack> */}

      {bottomBar}
    </Stack>
  );
  return (
    <WidgetCard
      sx={{
        padding: 0,
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
        sx={{
          opacity: props.disabled ? ".75" : "1",
          padding: 0,
          width: "100%",
          // padding: "40px 0 20px",
          flexGrow: 1,
        }}
        onClick={props.actionButtonOnClick}
      >
        {content}
      </Button>
    </WidgetCard>
  );
};

export default CtaWidget;
