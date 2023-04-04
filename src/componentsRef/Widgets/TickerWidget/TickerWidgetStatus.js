import { Stack, Typography } from "@mui/material";
import React from "react";

const TickerWidgetStatus = ({ label, value }) => {
  return (
    <Stack direction={"row"}>
      <Typography sx={{ fontSize: ".7rem" }}>
        {label ? label : "Status:"}
      </Typography>
      <Typography
        sx={{ fontWeight: "bold", fontSize: ".7rem", marginLeft: "5px" }}
      >
        {value}
      </Typography>
    </Stack>
  );
};

export default TickerWidgetStatus;
