import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@mui/icons-material";
import { Button, IconButton, Menu } from "@mui/material";
import React from "react";

const MuiButtonDropdown = ({
  id,
  open,
  anchorEl,
  handleClick,
  handleClose,
  children,
  icon,
  sx,
}) => {
  const buttonType = icon ? (
    <IconButton
      onClick={handleClick}
      sx={sx}
      // sx={{
      //   padding: "1px 8px",
      //   fontWeight: 500,
      //   fontSize: ".7rem",
      // }}
    >
      {icon}
    </IconButton>
  ) : (
    <Button
      onClick={handleClick}
      variant="contained"
      endIcon={open ? <KeyboardArrowUpRounded /> : <KeyboardArrowDownRounded />}
      sx={{
        padding: "1px 8px",
        fontWeight: 500,
        fontSize: ".7rem",
      }}
    >
      Select Action
    </Button>
  );
  return (
    <>
      {buttonType}
      <Menu
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {children}
      </Menu>
    </>
  );
};

export default MuiButtonDropdown;
