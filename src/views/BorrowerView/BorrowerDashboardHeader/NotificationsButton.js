import { NotificationsOutlined } from "@mui/icons-material";
import {
  Badge,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const NotificationsButton = (props) => {
  // const { user } = useStytchUser();

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

  return (
    <>
      <Badge badgeContent={4} color="error">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2, padding: 0 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <NotificationsOutlined
            sx={{ width: 24, height: 24, color: "#ffffff" }}
          />
        </IconButton>
      </Badge>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{ padding: 0 }}
        PaperProps={{
          elevation: 0,
          sx: {
            minWidth: "200px",
            // minWidth: "130px",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            ".MuiList-root": {
              padding: 0,
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
        <Typography
          sx={{ padding: "10px" }}
          variant="h3"
          fontWeight={700}
          fontSize=".9rem"
        >
          Notifications
        </Typography>
        <Divider sx={{ margin: "0px 0" }} />

        <Group title={"New"}>
          <UserProfileMenuItem title="Example notification 1" />
          <UserProfileMenuItem title="Example notification 2" />
          <UserProfileMenuItem title="Example notification 3" />
          <UserProfileMenuItem title="Example notification 4" />
        </Group>
        <Divider sx={{ margin: "0px !important" }} />

        <Group title={"Earlier"}>
          <UserProfileMenuItem title="Example notification 1" />
          <UserProfileMenuItem title="Example notification 2" />
          <UserProfileMenuItem title="Example notification 3" />
          <UserProfileMenuItem title="Example notification 4" />
          <UserProfileMenuItem title="Example notification 5" />
          <UserProfileMenuItem title="Example notification 6" />
          <UserProfileMenuItem title="Example notification 7" />
          <UserProfileMenuItem title="Example notification 8" />
        </Group>
      </Menu>
    </>
  );
};

const Group = ({ title, children }) => {
  const subHeaderStyles = { padding: "6px 0px 6px 10px" };
  return (
    <Box padding={"10px 0"}>
      <Typography
        sx={subHeaderStyles}
        variant="h3"
        fontWeight={600}
        fontSize=".8rem"
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

const UserProfileMenuItem = (props) => {
  return (
    <MenuItem
      onClick={props.onClick}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        padding: "8px 16px",
      }}
    >
      <Stack>
        <Typography
          variant="body1"
          sx={{
            fontSize: ".75rem",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          sx={{
            fontSize: ".7rem",
          }}
          variant="body2"
          color="text.secondary"
        >
          3 days ago
        </Typography>
      </Stack>
    </MenuItem>
  );
};

export default NotificationsButton;
