import { Close, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./InputSave.css";

const InputSave = ({
  onSave,
  onReset,
  row,
  saveText,
  resetText,
  style,
  isLoading,
}) => {
  return (
    <div style={style} className={`input-save-icon ${row ? "row" : null}`}>
      <Tooltip placement="top" title={saveText ? saveText : "Save"} arrow>
        <LoadingButton
          sx={{ minWidth: 0, padding: 0, paddingRight: "0 !important" }}
          loading={isLoading}
          type="button"
          id="save"
          onClick={onSave}
          // endIcon
        >
          <Box sx={{ visibility: !isLoading ? "visible" : "hidden" }}>
            <Save />
          </Box>
        </LoadingButton>
      </Tooltip>

      <Tooltip title={resetText ? resetText : "Reset"} arrow>
        <button type="button" id="reset" onClick={onReset}>
          <Close />
        </button>
      </Tooltip>
    </div>
  );
};

export default InputSave;
