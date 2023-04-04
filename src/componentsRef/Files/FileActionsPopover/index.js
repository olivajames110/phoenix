import {
  Box,
  CircularProgress,
  Divider,
  IconButton,
  LinearProgress,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import React from "react";

import {
  AspectRatioOutlined,
  Download,
  FileDownloadOutlined,
  GavelOutlined,
  MoreVert,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";

import { isNil } from "lodash";
import { useFilesHook } from "../../../../hooks/useFilesHook";
import { updateFormData } from "../../../../redux/actions/formDataActions";
import MuiButtonDropdown from "../../MuiButtonDropdown";

import "./FileActionsPopover.css";
import { checkFilenameType } from "../../../../helpers/checkFilenameType";
import { checkFileStorageNameType } from "../../../../helpers/checkFileStorageNameType";

const FileActionsPopover = (props) => {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.formData);

  const {
    filesGetIsLoading,
    filesPostIsLoading,
    previewFile,
    updateFile,
    loadingName,
    getAllDealFiles,
  } = useFilesHook();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    // setShowSuccess(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSuccess = () => {
    handleFetchAllDealDocuments();
    handleClose();
  };

  const handleFetchAllDealDocuments = async () => {
    const onSuccess = (data) => {
      console.log("success", data);
      dispatch(updateFormData({ key: "documents", value: data.items }));
      handleClose();
    };
    const params = {
      name: "Get All Deal Files",
      dealId: formData._id,
      ironId: formData.ironId,
      onSuccessFn: onSuccess,
    };
    getAllDealFiles(params);
  };

  const handlePreviewFile = async () => {
    const getFileParams = {
      filename: checkFileStorageNameType(props.file),
      dealId: formData._id,
      ironId: formData.ironId,
      onSuccessFn: handleClose,
      loadingName: "preview",
    };

    previewFile(getFileParams);
  };

  const handleDownloadFile = async (filename) => {
    const getFileParams = {
      filename: filename,
      downloadName: filename,
      dealId: formData._id,
      ironId: formData.ironId,
      onSuccessFn: handleClose,
      loadingName: "download",
    };

    previewFile(getFileParams);
  };

  const handleMarkFinal = () => {
    let uploadState = {
      _id: props.file._id,
      isFinal: !props.file.isFinal,
    };

    const getFileParams = {
      name: "Make Final Update",
      dealId: formData?._id,
      ironId: formData?.ironId,
      payload: uploadState,
      onSuccessFn: onSuccess,
      loadingName: "final",
    };

    updateFile(getFileParams);
  };

  const handleMakeHidden = () => {
    let uploadState = {
      _id: props.file._id,
      isHidden: true,
      isFinal: false,
    };

    const getFileParams = {
      name: "Make Hidden Update",
      payload: uploadState,
      dealId: formData?._id,
      ironId: formData?.ironId,
      onSuccessFn: onSuccess,
      loadingName: "hidden",
    };

    updateFile(getFileParams);
  };

  const handleMakeVisible = () => {
    let uploadState = {
      _id: props.file._id,
      isHidden: false,
    };

    const getFileParams = {
      name: "Make Visible Update",
      payload: uploadState,
      dealId: formData?._id,
      ironId: formData?.ironId,
      onSuccessFn: onSuccess,
      loadingName: "visible",
    };

    updateFile(getFileParams);
  };

  return (
    <Box>
      <DownloadIconButton
        handleClose={handleClose}
        filename={checkFileStorageNameType(props.file)}
        displayName={checkFilenameType(props.file)}
      />
      <MuiButtonDropdown
        icon={<MoreVert sx={{ color: "var(--blue)", padding: "1px" }} />}
        id={id}
        sx={{ padding: "0px", color: "var(--blue)" }}
        open={open}
        anchorEl={anchorEl}
        handleClick={handleClick}
        handleClose={handleClose}
      >
        <MenuItem onClick={handlePreviewFile}>
          <ListItemIcon>
            <AspectRatioOutlined sx={{ maxHeight: "1rem" }} fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            {filesGetIsLoading && loadingName === "preview" ? (
              <LinearProgress />
            ) : (
              "Preview File"
            )}
          </ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() =>
            handleDownloadFile(checkFileStorageNameType(props.file))
          }
        >
          <ListItemIcon>
            <FileDownloadOutlined sx={{ maxHeight: "1rem" }} fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            {filesGetIsLoading && loadingName === "download" ? (
              <LinearProgress />
            ) : (
              "Download"
            )}
          </ListItemText>
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleMarkFinal}>
          <ListItemIcon>
            <GavelOutlined sx={{ maxHeight: "1rem" }} fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            {filesPostIsLoading && loadingName === "final" ? (
              <LinearProgress />
            ) : (
              "Mark As Final"
            )}
          </ListItemText>
        </MenuItem>

        {props.file.isHidden === true ? (
          <MenuItem onClick={handleMakeVisible}>
            <ListItemIcon>
              <VisibilityOffOutlined
                sx={{ maxHeight: "1rem" }}
                fontSize="small"
              />
            </ListItemIcon>

            <ListItemText>
              {filesPostIsLoading && loadingName === "visible" ? (
                <LinearProgress />
              ) : (
                "Make Visibile"
              )}
            </ListItemText>
          </MenuItem>
        ) : (
          <MenuItem onClick={handleMakeHidden}>
            <ListItemIcon>
              <VisibilityOutlined sx={{ maxHeight: "1rem" }} fontSize="small" />
            </ListItemIcon>

            <ListItemText>
              {filesPostIsLoading && loadingName === "hidden" ? (
                <LinearProgress />
              ) : (
                "Make Hidden"
              )}
            </ListItemText>
          </MenuItem>
        )}
      </MuiButtonDropdown>
    </Box>
  );
};

const DownloadIconButton = ({ handleClose, filename }) => {
  const { filesGetIsLoading, previewFile } = useFilesHook();
  const formData = useSelector((state) => state.formData);

  const handleDownloadFile = async (filename, displayName) => {
    const getFileParams = {
      filename: filename,
      dealId: formData._id,
      ironId: formData.ironId,
      downloadName: isNil(displayName) ? filename : displayName,
      onSuccessFn: handleClose,
    };

    previewFile(getFileParams);
  };
  return (
    <IconButton
      onClick={() => handleDownloadFile(filename)}
      sx={{ padding: "0px", color: "var(--blue)" }}
    >
      {filesGetIsLoading ? (
        <Box width="18px" padding="0 4px">
          <CircularProgress size={"100%"} />
        </Box>
      ) : (
        <Download
          sx={{ width: "18px", color: "var(--blue)", padding: "1px" }}
        />
      )}
    </IconButton>
  );
};

export default FileActionsPopover;
