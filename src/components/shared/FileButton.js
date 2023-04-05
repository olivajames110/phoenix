import { LoadingButton } from "@mui/lab";
import { CircularProgress, IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const FileButton = ({
  filename,
  actionCategory,
  label,
  icon,
  startIcon,
  endIcon,
  sx,
  variant,
  defaultStyle,
  underline,
  minWidth,
}) => {
  // const { filesGetIsLoading, previewFile } = useFilesHook();
  const filesGetIsLoading = false;
  const formData = useSelector((state) => state.formData);

  const handlePreviewFile = async () => {
    const getFileParams = {
      filename: filename,
      dealId: formData._id,
      ironId: formData.ironId,
      actionCategory,
    };

    console.log("params", getFileParams);
    // previewFile(getFileParams);
  };

  const buttonLabel = label ? label : "View File";

  if (icon) {
    return (
      <IconButton
        loading={true}
        onClick={handlePreviewFile}
        aria-label="delete"
        size="small"
      >
        {filesGetIsLoading ? (
          <CircularProgress
            sx={{ width: "1rem !important", height: "1rem !important" }}
          />
        ) : (
          icon
        )}
      </IconButton>
    );
  }

  const styling = {
    fontWeight: 500,
    padding: underline ? 0 : "0 6px",
    fontSize: ".7rem",
    textDecoration: underline ? "underline" : "inherit",
    minWidth: minWidth ? minWidth : "inherit",
    ...sx,
  };

  const defaultStyles = { ...sx };
  return (
    <LoadingButton
      loading={filesGetIsLoading}
      onClick={handlePreviewFile}
      startIcon={startIcon ? startIcon : null}
      endIcon={endIcon ? endIcon : null}
      sx={defaultStyle ? defaultStyles : styling}
      variant={variant ? variant : "text"}
    >
      {icon ? icon : buttonLabel}
    </LoadingButton>
  );
};

export default FileButton;
