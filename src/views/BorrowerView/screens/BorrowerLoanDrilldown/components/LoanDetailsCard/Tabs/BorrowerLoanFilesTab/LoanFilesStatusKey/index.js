import {
  CheckRounded,
  HourglassEmptyRounded,
  PublishedWithChangesRounded,
} from "@mui/icons-material";
import { Stack } from "@mui/system";
import React from "react";
import "./LoanFilesStatusKey.css";

const LoanFilesStatusKey = (props) => {
  return (
    <Stack flexWrap={"wrap"} id="loan-status-key" direction={"row"} spacing={3}>
      <StatusItem icon={<HourglassEmptyRounded />} label="Not Yet Submitted" />
      <StatusItem
        icon={<PublishedWithChangesRounded />}
        label="Missing or Pending"
        type="pending"
      />
      <StatusItem type="completed" icon={<CheckRounded />} label="Completed" />
    </Stack>
  );
};

const StatusItem = (props) => {
  return (
    <div className={`status-item ${props.type}`}>
      <div className="status-item__icon">{props.icon}</div>
      <span className="status-item__label">{`${props.label}`}</span>
    </div>
  );
};
export default LoanFilesStatusKey;
