import { Box, Card, Stack, Typography } from "@mui/material";
import ScreenSubTitle from "../../../../../components/layout/Screen/ScreenSubTitle";
import BorderCard from "../../../../../components/shared/BorderCard";
import CtaWidget from "../../../../../components/shared/Widgets/CtaWidget";
import TickerWidgetStatus from "../../../../../components/shared/Widgets/TickerWidget/TickerWidgetStatus";
import WidgetCard from "../../../../../components/shared/Widgets/WidgetCard";
import WidgetCardHeader from "../../../../../components/shared/Widgets/WidgetCardHeader";
import WidgetTitle from "../../../../../components/shared/Widgets/WidgetTitle";
import {
  creditAuthGraphic,
  drawRequestGraphic,
  loanAppGraphic,
  loanScenarioGraphic,
  uploadFilesGraphic,
} from "./borrowerDashboardWidgetGraphics";

export const LoanScenariosWidget = (props) => {
  return (
    <CtaWidget
      title="Fundraising"
      description="Create and modify a fundraising campaign"
      statusLabel={"Active Loans:"}
      statusValue={"3"}
      actionButtonOnClick={props.actionButtonOnClick}
      icon={loanScenarioGraphic}
    >
      <TickerWidgetStatus value="Not Submitted" />
    </CtaWidget>
  );
};

export const LoanApplicationWidget = (props) => {
  return (
    <CtaWidget
      title="Pets"
      description="Manage the status of your available pets"
      statusLabel={"Active Loans:"}
      statusValue={"3"}
      actionButtonOnClick={props.actionButtonOnClick}
      icon={loanAppGraphic}
    >
      <TickerWidgetStatus value="Not Submitted" />
    </CtaWidget>
  );
};

export const CreditAuthorizationWidget = (props) => {
  return (
    <CtaWidget
      title="Online Reviews"
      description="Monitor your online reputation"
      statusLabel={"Expires:"}
      statusValue={"3/12/23"}
      actionButtonOnClick={props.actionButtonOnClick}
      icon={creditAuthGraphic}
    >
      <TickerWidgetStatus value="Not Submitted" />
    </CtaWidget>
  );
};

export const SubmitDrawRequestWidget = (props) => {
  return (
    <CtaWidget
      title="Submit Draw"
      description="Request to withdraw money for a property"
      statusLabel={"Remaining Draws:"}
      statusValue={"6"}
      actionButtonOnClick={props.actionButtonOnClick}
      icon={drawRequestGraphic}
      disabled={false}
    >
      <TickerWidgetStatus value="Not Submitted" />
    </CtaWidget>
  );
};

export const UploadFilesWidget = (props) => {
  return (
    <CtaWidget
      title="Upload Files"
      description="Submit files and documents for your loan"
      statusLabel={"Remaining Draws:"}
      statusValue={"6"}
      actionButtonOnClick={props.actionButtonOnClick}
      icon={uploadFilesGraphic}
      disabled={false}
    >
      <TickerWidgetStatus value="Not Submitted" />
    </CtaWidget>
  );
};

export const MessagesWidget = (props) => {
  return (
    <WidgetCard
      variant="outlined"
      style={{
        background: "#ffffff",
        padding: 0,
        height: "100%",
        // width: "100%",
        // flexGrow: 0,
        display: "flex",
        flexDirection: "column",
        flexBasis: "400px",
        borderLeft: "var(--border)",
        // overflowY: "auto",
        // flexGrow: 1,
      }}
    >
      <WidgetCardHeader
        title="Messages"
        sx={{ borderBottom: "var(--border)" }}
      />

      <Box
        sx={{
          position: "relative",
          overflowY: "auto",
          height: "100%",

          flexGrow: 1,
        }}
      >
        <Stack
          spacing={1}
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            padding: "8px 10px ",
          }}
        >
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          {/* <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem /> */}
        </Stack>
      </Box>
    </WidgetCard>
  );
};

const MessageItem = (props) => {
  return (
    <Box border={"var(--border)"} padding="10px">
      <Typography variant="h4">Title Item</Typography>
      <Typography variant="body1">Messages</Typography>
    </Box>
  );
};
