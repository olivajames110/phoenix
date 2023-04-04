import { Notifications } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
// import "./UserNotifications.css";

const UserNotifications = (props) => {
  return (
    <Badge badgeContent={props.count} color="secondary">
      <Notifications sx={{ width: "1.4rem", height: "1.4rem" }} />
    </Badge>
  );
};

export default UserNotifications;
