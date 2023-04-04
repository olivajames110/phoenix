import React from "react";

import { CloseRounded } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";

import SuccessContent from "../SuccessContent";

const MuiDialogModal = ({
  title,
  show,
  onClose,
  dividers,
  paperWidth,
  maxWidth,
  headerAction,
  padding,
  isSuccess,
  successMessage,
  centerTitle,
  children,
}) => {
  const modalHeaderStyles = {
    // fontWeight: "bold !important",
    borderBottom: "1px solid rgba(128, 128, 128, 0.155)",
    paddingBottom: " 14px !important",
  };

  const titleSuccessMessage = successMessage
    ? successMessage
    : "Submission Successful!";
  return (
    <Dialog
      id="mui-dialog-modal"
      className="mui-dialog"
      sx={{
        "& .MuiDialog-paper": {
          width: paperWidth ? paperWidth : maxWidth === "lg" ? "680px" : "80%",
        },
      }}
      maxWidth={maxWidth && !isSuccess ? maxWidth : "xs"}
      open={show}
    >
      <DialogTitle
        sx={modalHeaderStyles}
        display={"flex"}
        className="mui-dialog-title"
        justifyContent={centerTitle || isSuccess ? "center" : "space-between"}
      >
        {isSuccess ? titleSuccessMessage : title}
        {headerAction ? headerAction : null}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseRounded sx={{ width: "1.5rem", height: "1.5rem" }} />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{ paddingTop: padding ? "14px !important" : "0px" }}
        dividers={dividers ? dividers : false}
      >
        {isSuccess ? (
          <SuccessContent />
        ) : (
          <div className="dialog-body">{children}</div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MuiDialogModal;
