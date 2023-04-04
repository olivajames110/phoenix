import { LoadingButton } from "@mui/lab";
import { Button, DialogActions } from "@mui/material";
import React from "react";

const MuiDialogFooterButtons = ({
  isLoading,

  onSubmit,
  onClose,
  onSaveLabel,
  onCancelLabel,
  disabled,
  submit,
}) => {
  return (
    <DialogActions>
      <Button autoFocus onClick={onClose}>
        {onCancelLabel ? onCancelLabel : "Cancel "}
      </Button>
      <LoadingButton
        disabled={disabled}
        type={submit ? "submit" : "button"}
        loading={isLoading}
        id="submit"
        variant="contained"
        onClick={onSubmit}
      >
        {onSaveLabel ? onSaveLabel : "Save "}
      </LoadingButton>
    </DialogActions>
  );
};

export default MuiDialogFooterButtons;
