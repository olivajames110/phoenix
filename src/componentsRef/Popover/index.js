import { ClickAwayListener, Popover as MuiPopover } from "@mui/material";
import React, { useEffect, useRef } from "react";
import "./Popover.css";

const Popover = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;
  const handleClick = (event) => {
    console.log("clik");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const topPosition = {
  //   anchorOrigin={{
  //     vertical: "top",
  //     horizontal: "center",
  //   }}
  //   transformOrigin={{
  //     vertical: "bottom",
  //     horizontal: "center",
  //   }}
  // }

  useEffect(() => {
    console.log("Showwwww");
  }, []);
  return (
    <>
      <MuiPopover
        id={id}
        className="custom-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        {props.children}
      </MuiPopover>

      <button
        aria-describedby={id}
        type="button"
        variant="contained"
        className={`popover-view-more-button ${props.className}`}
        onClick={handleClick}
      >
        {props.button}
      </button>
    </>
  );
};

export default Popover;
