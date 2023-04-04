import { CloseRounded } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";
import SuccessContent from "../SuccessContent";
import "./MuiDialog.css";
import MuiDialogFooterButtons from "./MuiDialogFooterButtons";

const MuiDialog = ({
  id,
  centerTitle,
  children,
  dividers,
  headerAction,
  isLoading,
  isSuccess,
  maxWidth,
  modal,
  onSubmit,
  onClose,
  onSaveLabel,
  onCancelLabel,
  paperWidth,
  show,
  submit,
  keepMounted,
  successMessage,
  title,
  disabled,
}) => {
  // const StyledDialog = styled(Dialog)`
  //   .MuiBackdrop-root {
  //     background-color: rgba(9, 30, 66, 0.54);
  //   }
  // `;

  const modalHeaderStyles = {
    // fontWeight: "bold !important",
    borderBottom: "1px solid rgba(128, 128, 128, 0.155)",
    paddingBottom: " 14px !important",
  };

  const headerStyles = {
    // fontWeight: "bold !important",
    paddingBottom: " 14px !important",
    // borderBottom: "1px solid rgba(128, 128, 128, 0.155)",
  };

  const titleSuccessMessage = successMessage
    ? successMessage
    : "Submission Successful!";

  return (
    <Dialog
      keepMounted={keepMounted}
      id={id ? id : "status-dialog"}
      className="mui-dialog"
      sx={{
        "& .MuiDialog-paper": {
          width: paperWidth ? paperWidth : maxWidth === "lg" ? "680px" : "80%",
        },
      }}
      maxWidth={maxWidth && !isSuccess ? maxWidth : "xs"}
      open={show}
      // {...other}
    >
      <DialogTitle
        sx={modal ? modalHeaderStyles : headerStyles}
        display={"flex"}
        className="mui-dialog-title"
        justifyContent={centerTitle || isSuccess ? "center" : "space-between"}
      >
        {isSuccess ? titleSuccessMessage : title}
        {headerAction ? headerAction : null}
        {modal || isSuccess ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseRounded sx={{ width: "1.5rem", height: "1.5rem" }} />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent dividers={dividers ? dividers : false}>
        {isSuccess ? (
          <SuccessContent />
        ) : (
          <div className="dialog-body">{children}</div>
        )}
      </DialogContent>

      {!submit && !modal && !isSuccess ? (
        <MuiDialogFooterButtons
          disabled={disabled}
          isLoading={isLoading}
          onSubmit={onSubmit}
          onClose={onClose}
          onSaveLabel={onSaveLabel}
          onCancelLabel={onCancelLabel}
          submit={submit}
        />
      ) : null}
    </Dialog>
  );
};

export default MuiDialog;
