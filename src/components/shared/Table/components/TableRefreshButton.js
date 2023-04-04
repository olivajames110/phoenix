import { RefreshRounded } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Tooltip } from "@mui/material";
import React from "react";

const TableRefreshButton = (props) => {
  return (
    <Tooltip
      sx={{ width: "fit-content", minWidth: "44px", ...props.sx }}
      text="Refresh"
    >
      <LoadingButton loading={props.isLoading} onClick={props.onClick}>
        <RefreshRounded />
      </LoadingButton>
    </Tooltip>
  );
};

export default TableRefreshButton;
