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

const CtaWidget = (props) => {
  const graphic = (
    <Box sx={{ maxWidth: "180px", marginBottom: "20px" }}>
      <Badge badgeContent={props.count} color="secondary">
        {props.icon}
      </Badge>
    </Box>
  );

  const status = props.statusLabel ? (
    <Box
      sx={{
        padding: "5px",
        position: "absolute",
        right: "10px",
        top: "10px",
        opacity: props.disabled ? ".55" : "1",
      }}
      size="small"
    >
      <TickerWidgetStatus label={props.statusLabel} value={props.statusValue} />
    </Box>
  ) : null;

  const content = (
    <Stack alignItems={"center"}>
      {graphic}
      <WidgetTitle>
        {props.title}
        <ChevronRightRounded />
      </WidgetTitle>
      <Typography sx={{ marginTop: "2px", opacity: ".8" }} variant="body1">
        {props.description}
      </Typography>
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
      {status}
      <Button
        disabled={props.disabled}
        // variant="outlined"
        sx={{
          opacity: props.disabled ? ".75" : "1",
          padding: "40px 0 20px",
          flexGrow: 1,
        }}
        onClick={props.actionButtonOnClick}
      >
        {content}
      </Button>
    </WidgetCard>
  );
  // return (
  //   <DashboardWidget
  //     style={{
  //       minHeight: "400px",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //     ticker
  //     status={props.status}
  //   >
  //     <Stack
  //       spacing={2}
  //       direction={"row"}
  //       alignItems="center"
  //       justifyContent={"space-between"}
  //     >
  //       <Stack spacing={2} direction={"row"}>
  //         {/* {graphic} */}

  //         <div className="widget-body">
  //           <div className="title">{props.title}</div>
  //           {props.description ? (
  //             <div className="sub-title">{props.description}</div>
  //           ) : null}
  //           {props.children}
  //         </div>
  //       </Stack>
  //       {props.viewMoreOnClick ? (
  //         <IconButton
  //           id="view-more-button"
  //           onClick={props.viewMoreOnClick}
  //           sx={{ marginRight: "-12px !important", padding: "5px" }}
  //           size="small"
  //         >
  //           <ChevronRight
  //             sx={{ color: "var(--blue)", width: "1.4rem", height: "1.4rem" }}
  //           />
  //         </IconButton>
  //       ) : null}
  //       {props.actionButtonOnClick ? (
  //         <IconButton
  //           id="action-button"
  //           onClick={props.actionButtonOnClick}
  //           sx={{ marginRight: "-12px !important", padding: "5px" }}
  //           size="small"
  //         >
  //           {props.actionButtonIcon ? (
  //             props.actionButtonIcon
  //           ) : (
  //             <AddCircleOutlineOutlined
  //               sx={{ color: "var(--blue)", width: "1.2rem", height: "1.2rem" }}
  //             />
  //           )}
  //         </IconButton>
  //       ) : null}
  //     </Stack>
  //   </DashboardWidget>
  // );
};

export default CtaWidget;
