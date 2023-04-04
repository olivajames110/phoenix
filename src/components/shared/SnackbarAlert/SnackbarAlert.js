import { Alert, Fade, Snackbar } from "@mui/material";
import React from "react";
import "./SnackbarAlert.css";

const SnackbarAlert = ({
  open,
  autoHideDuration,
  onClose,
  transition,
  message,
  sx,
  absolute,
  anchorPosition,
  type,
  isGlobal,
}) => {
  const styles = {
    position: absolute ? "absolute" : "fixed",
    ...sx,
  };
  const defaultType = type ? type : "success";
  return (
    <Snackbar
      id="snackbar-alert"
      open={open}
      autoHideDuration={autoHideDuration || 2400}
      TransitionComponent={transition || Fade}
      onClose={onClose}
      className={type}
      sx={styles}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: anchorPosition ? anchorPosition : "center",
      }}
    >
      <Alert
        onClose={onClose}
        severity={isGlobal ? type : defaultType}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
