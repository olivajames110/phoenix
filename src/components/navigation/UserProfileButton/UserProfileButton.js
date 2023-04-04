import {
  Logout,
  Person,
  ReceiptLongRounded,
  ReceiptRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";

import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useReduxHook } from "../../../redux/helpers/useReduxHook";

import "./UserProfileButton.css";

const UserProfileButton = (props) => {
  const { handleLogoutUser } = useReduxHook();
  const [showInvoice, setShowInvoice] = useState(false);
  const user = useSelector((state) => state.user);
  // const { user } = useStytchUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    // stytch.session.revoke();
    handleLogoutUser();
  };
  //Popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const userEmail =
  // const userInitials =
  //   user === undefined
  //     ? "F"
  //     : `${user?.firstName.charAt(0)}${user?.lastName.charAt(0)}`;
  const avatarContent =
    user.firstName === undefined || user.lastName === undefined ? (
      <Person />
    ) : (
      `${user?.firstName?.charAt(0)}${user?.lastName?.charAt(0)}`
    );
  const menu = (
    <>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            // minWidth: "130px",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Box
          sx={{
            display: "flex",
            padding: " 5px",
            justifyContent: "center",
            textAlign: "center",
            // opacity: 0.8,
            fontWeight: "bold",
            fontSize: ".9rem",
          }}
        >
          {`${user?.firstName} ${user?.lastName}`}
          {/* <Avatar /> {user[fieldNames.emailAddress]} */}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            opacity: 0.8,
            padding: "0 10px 5px",
            flexDirection: "column",
            fontSize: ".75rem",
          }}
        >
          <div style={{ paddingBottom: "6px" }}>{`${user?.emailAddress}`}</div>
          <div>{`Role: ${user?.userType}`}</div>
        </Box>

        <Divider sx={{ margin: "5px 0" }} />

        <UserProfileMenuItem
          title="Submit Invoice"
          icon={<ReceiptRounded fontSize="small" />}
          onClick={() => setShowInvoice(true)}
        />
        <UserProfileMenuItem
          title="My Invoices"
          icon={<ReceiptLongRounded fontSize="small" />}
          onClick={() => navigate("/loan-processing/invoices")}
        />
        <Divider sx={{ margin: "5px 0" }} />
        <UserProfileMenuItem
          title="Logout"
          icon={<Logout fontSize="small" />}
          onClick={handleLogout}
        />
      </Menu>
    </>
  );

  return (
    <>
      <Box
        sx={{
          borderLeft: "1px solid  #ffffff61",
          paddingLeft: "10px",
          marginLeft: "16px",
          display: "flex",
        }}
      >
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2, padding: 0 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}> {avatarContent}</Avatar>
        </IconButton>
      </Box>
      {menu}
    </>
  );
};

const UserProfileMenuItem = (props) => {
  return (
    <MenuItem
      sx={{
        display: "flex",
        justifyContent: "flex-start",
      }}
      onClick={props.onClick}
    >
      <ListItemIcon>{props.icon}</ListItemIcon>
      {props.title}
    </MenuItem>
  );
};

export default UserProfileButton;
