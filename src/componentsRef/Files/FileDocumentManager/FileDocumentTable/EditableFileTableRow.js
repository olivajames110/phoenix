import {
  Backdrop,
  Box,
  CircularProgress,
  InputAdornment,
  LinearProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useStytchUser } from "@stytch/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileDocumentSchema } from "../../../../../forms/_formQuestions/_formSchema/fileDocumentSchema";
import { apiEndpoints } from "../../../../../global/api/apiEndpoints";
import { checkFilenameType } from "../../../../../helpers/checkFilenameType";
import { checkFileStorageNameType } from "../../../../../helpers/checkFileStorageNameType";
import { createSelectItemsDocGroups } from "../../../../../helpers/createSelectItems/createSelectItemsDocGroups";
import { createSelectItemsDocType } from "../../../../../helpers/createSelectItems/createSelectItemsDocType";
import { getFileExtensionFromString } from "../../../../../helpers/getFileExtensionFromString";
import { parseISOToDateTime } from "../../../../../helpers/parseISOToDateTime";
import { removeEmailAddressFromString } from "../../../../../helpers/removeEmailAddressFromString";
import { removeFileExtensionFromString } from "../../../../../helpers/removeFileExtensionFromString";
import { useGetRequest } from "../../../../../hooks/helpers/useGetRequest";
import { usePostRequest } from "../../../../../hooks/helpers/usePostRequest";
import { useFilesHook } from "../../../../../hooks/useFilesHook";
import { updateFormData } from "../../../../../redux/actions/formDataActions";
import { globalAlertSuccess } from "../../../../../redux/actions/globalAlertActions";
import EditableFieldWrapper from "../../../../form/components/shared/EditableFieldWrapper";
import InputSave from "../../../InputSave/InputSave";
import FileActionsPopover from "../../FileActionsPopover";
// import "./EditableFileTableRow.css";

export const EditableFileTableRow = ({
  selectedFile,
  index,
  row,
  onUpdate,
  onDelete,
  onSaveSuccess,
  onSaveFail,
  showDocOptions,
  original,
  handleCloseSnackbar,
  isCategorized,
  ...props
}) => {
  // console.log("🚀 ~ file: EditableFileTableRow.js ~ line 35 ~ row", row);

  //State
  const [docGroup, setDocGroup] = useState("");
  const [docType, setDocType] = useState("");
  const [fileNameValue, setFileNameValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  //Hooks
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const {
    filesGetIsLoading,
    filesPostIsLoading,
    previewFile,
    updateFile,
    loadingName,
    getAllDealFiles,
  } = useFilesHook();
  //Functions
  const click = useSingleAndDoubleClick(
    () => handlePreviewFile(),
    () => setIsEditing(true)
  );

  const handleRowClick = (cell) => {
    console.log("click", cell);
    // console.log("PROPS", props.original);
    if (
      cell.column.id === "File Name" ||
      cell.column.id === "Document Group" ||
      cell.column.id === "Document Type"
    ) {
      if (!isEditing) {
        click();
      }
    }
  };

  const handleChangeFileName = (e) => {
    let val = e.target.value;
    console.log("val", val);
    // let newFileName = `EXAMPLEEEE`;

    // let newFileName = `${val}.${getFileExtensionFromString(original.filename)}`;
    // const updatedName = data?.value?.trim();

    setFileNameValue(val);
    if (onUpdate) {
      const data = {
        type: "file_display_name",
        file: selectedFile,
        value: val,
      };

      onUpdate(data);
    }
  };

  const handleSelectDocGroup = (e) => {
    let val = e.target.value;
    console.log("select", val);
    setDocGroup(val);
    setDocType("");
    if (onUpdate) {
      const data = {
        type: "docGroup",
        file: selectedFile,
        value: val,
      };
      onUpdate(data);
    }
  };

  const handleDocTypeChange = (e) => {
    let val = e.target.value;
    setDocType(val);
    if (onUpdate) {
      const data = {
        type: "docType",
        file: selectedFile,
        value: val,
      };

      onUpdate(data);
    }
  };

  const handlePreviewFile = async () => {
    if (isEditing) {
      return;
    }

    previewFile({
      filename: checkFileStorageNameType(original),
      dealId: formData._id,
      ironId: formData.ironId,
      // loadingName: "preview",
    });
  };

  const handleFetchAllDealDocuments = async () => {
    const onSuccess = (responseData) => {
      dispatch(updateFormData({ key: "documents", value: responseData.items }));
    };

    const params = {
      dealId: formData._id,
      ironId: formData.ironId,
      onSuccessFn: onSuccess,
    };
    await getAllDealFiles(params);
  };

  const handleOnSave = async () => {
    let data = {
      _id: original._id,
      file_display_name: fileNameValue,
      docGroup: docGroup,
      docType: docType,
    };

    const onSuccess = () => {
      dispatch(globalAlertSuccess("Save Successful"));
      handleFetchAllDealDocuments();
      handleOnReset();
    };

    const params = {
      name: "Update Deal Document",
      payload: data,
      dealId: formData?._id,
      ironId: formData?.ironId,
      onSuccessFn: onSuccess,
      onFailFn: onSaveFail,
      loadingName: "documentUpdate",
    };
    console.log("original", original);
    console.log("SENT", params);
    await updateFile(params);
  };

  const handleOnReset = (object) => {
    setIsEditing(false);
    setDocGroup(original.docGroup);
    setDocType(original.docType);
    setFileNameValue(checkFilenameType(original));
  };

  useEffect(() => {
    // console.log("aaa", selectedFile, index, onUpdate);
    if (original.docGroup !== fileDocumentSchema.noCategory.name) {
      setDocGroup(original.docGroup);
    }
    if (original.docType !== fileDocumentSchema.noCategory.name) {
      setDocGroup(original.docGroup);
    }
  }, [original]);

  useEffect(() => {
    let fileName = checkFilenameType(original);
    setDocGroup(original.docGroup);
    setDocType(original.docType);
    setFileNameValue(fileName);
  }, [original]);

  const readOnlyContent = row.cells.map((cell, i) => (
    <td
      onClick={() => handleRowClick(cell)}
      key={Math.random()}
      {...cell.getCellProps()}
    >
      {cell.render("Cell")}
    </td>
  ));

  const editContent = (
    <>
      {/* <td> </td> */}

      {/* FILE NAMEtable cell  */}
      <td
        // onClick={handleRowClick}
        className="editable-cell"
      >
        {/* {original.path} */}
        <EditableFieldWrapper display>
          <TextField
            fullWidth
            onChange={handleChangeFileName}
            value={fileNameValue}
            size="small"
            sx={{ fontSize: ".7rem !important" }}
            variant="filled"
          />
        </EditableFieldWrapper>
      </td>

      {/* DOCUMENT GROUP table cell  */}
      {isCategorized ? null : (
        <td
          //  onClick={handleRowClick}
          className="editable-cell"
        >
          <EditableFieldWrapper display>
            <Select
              id="popover-select"
              // labelId={"doc-group"}
              size="small"
              variant="filled"
              fullWidth
              value={docGroup}
              label="New Category"
              displayEmpty
              sx={{
                opacity: docGroup === "" ? ".65" : "1",
                fontStyle: docGroup === "" ? "italic" : "normal",
              }}
              onChange={handleSelectDocGroup}
              // onChange={(e) => setDocGroup(e.target.value)}
            >
              <MenuItem disabled value={""}>
                Select document group
              </MenuItem>
              {createSelectItemsDocGroups().map((i) => (
                <MenuItem key={i.name} value={i.name}>
                  {i.label}
                </MenuItem>
              ))}
            </Select>
          </EditableFieldWrapper>
        </td>
      )}

      {/* DOCUMENT TYPE table cell  */}
      <td
        onClick={handleRowClick}
        className="editable-cell"
        id="doc-type"
        style={{
          opacity: docGroup === "" ? ".7" : "1",
          padding: docGroup === "" ? "4px 6px" : "0px",
        }}
      >
        {docGroup === "" ? (
          "Doc Group must be selected"
        ) : (
          <EditableFieldWrapper display>
            <Select
              id="docTypeSelect"
              labelId={"doc-type"}
              size="small"
              variant="filled"
              fullWidth
              displayEmpty
              value={docType}
              sx={{
                opacity: docType === "" ? ".65" : "1",
                fontStyle: docType === "" ? "italic" : "normal",
              }}
              label="New Category"
              onChange={handleDocTypeChange}
              // onChange={(e) => setDocGroup(e.target.value)}
            >
              <MenuItem disabled value={""}>
                Select document type
              </MenuItem>

              {createSelectItemsDocType(docGroup).map((i) => (
                <MenuItem key={i.name} value={i.name}>
                  {i.label}
                </MenuItem>
              ))}
            </Select>
          </EditableFieldWrapper>
        )}
      </td>

      {/* SAVE ICON table cell  */}
      <td>{`${removeEmailAddressFromString(
        original.uploadedBy
      ).toUpperCase()} on ${parseISOToDateTime(original.uploadDate)}`}</td>
      <td>
        {isEditing ? (
          <InputSave onSave={handleOnSave} onReset={handleOnReset} />
        ) : (
          <FileActionsPopover file={original} />
        )}
      </td>
    </>
  );

  const content = isEditing ? editContent : readOnlyContent;

  return (
    <tr
      key={row.original.id}
      className={`${row.original.isHidden === true ? "hidden" : null} ${
        isEditing ? "editing" : null
      } ${
        row.original.isFinal === true && row.original.isHidden !== true
          ? "final"
          : null
      }`}
      {...row.getRowProps()}
    >
      {loadingName === "documentUpdate" ? (
        <Box padding={"17px 0"}>
          <LinearProgress
            sx={{
              position: "absolute",
              width: "96%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </Box>
      ) : (
        content
      )}

      <Backdrop
        sx={{
          color: "#ffffff !important",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={filesGetIsLoading}
      >
        <CircularProgress id="preview-loader" color="inherit" />
      </Backdrop>
    </tr>
  );
};

function useSingleAndDoubleClick(
  actionSimpleClick,
  actionDoubleClick,
  delay = 250
) {
  const [click, setClick] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // simple click
      if (click === 1) actionSimpleClick();
      setClick(0);
    }, delay);

    // the duration between this click and the previous one
    // is less than the value of delay = double-click
    if (click === 2) actionDoubleClick();

    return () => clearTimeout(timer);
  }, [click]);

  return () => setClick((prev) => prev + 1);
}
