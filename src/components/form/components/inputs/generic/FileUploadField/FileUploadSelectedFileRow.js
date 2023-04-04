import { Clear, Delete } from "@mui/icons-material";
import { InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import { isNil } from "lodash";
import React, { useEffect, useState } from "react";
import { fileDocumentSchema } from "../../../../../../forms/_formQuestions/_formSchema/fileDocumentSchema";
import { createSelectItemsDocGroups } from "../../../../../../helpers/createSelectItems/createSelectItemsDocGroups";
import { createSelectItemsDocType } from "../../../../../../helpers/createSelectItems/createSelectItemsDocType";
import { getFileExtensionFromString } from "../../../../../../helpers/getFileExtensionFromString";
import { removeFileExtensionFromString } from "../../../../../../helpers/removeFileExtensionFromString";

import EditableFieldWrapper from "../../../shared/EditableFieldWrapper";

const FileUploadSelectedFileRow = ({
  selectedFile,
  docGroup,
  onUpdate,
  onDelete,
  showDocOptions,
  index,
  allFiles,
}) => {
  const [docType, setDocType] = useState("");
  // console.log("allFiles", allFiles);
  const handleChangeFileName = (e) => {
    let val = e.target.value;
    // console.log("val", val);
    // let newFileName = `EXAMPLEEEE`;

    let newFileName = `${val}.${getFileExtensionFromString(
      selectedFile.file.name
    )}`;
    console.log("Inner -", newFileName);
    // const myRenamedFile = new File([selectedFile], newFileName);
    // console.log("myRenamedFile", myRenamedFile);
    // let newFile = Object.assign(selectedFile, {
    //   name: newFileName,
    // }),
    // let fileName = `${removeFileExtensionFromString(val)} `;
    // setFileNameValue(val);
    if (onUpdate) {
      // const originalFile =
      // selectedFile.file.name = newFileName;
      // console.log("asd", newFileName, selectedFile);
      const data = {
        type: "file_display_name",
        file: selectedFile,
        // value: myRenamedFile,
        value: newFileName,
        // value: e.target.value,
      };

      //
      onUpdate(data);
    }
  };

  const handleSelectDocGroup = (e) => {
    let val = e.target.value;
    console.log("select", val);
    // setSelectedDocGroup(val);
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

      //
      onUpdate(data);
    }
  };

  const handleDeleteDocument = () => {
    if (onUpdate) {
      //
      onDelete(selectedFile.id);
    }
  };

  // useEffect(() => {
  //   // console.log("aaa", selectedFile, index, onUpdate);
  //   if (selectedFile.docGroup !== fileDocumentSchema.noCategory.name) {
  //     setSelectedDocGroup(selectedFile.docGroup);
  //   }
  //   if (selectedFile.docType !== fileDocumentSchema.noCategory.name) {
  //     setSelectedDocGroup(selectedFile.docGroup);
  //   }
  // }, [selectedFile]);

  // useEffect(() => {
  //   console.log("LOAD", docType, selectedFile);
  //   let fileName = `${removeFileExtensionFromString(selectedFile.file.name)} `;
  //   setFileNameValue(fileName);
  // }, [allFiles]);

  const docOptionsContent = (
    <tr>
      <td>
        {/* {selectedFile.file.path} */}
        <EditableFieldWrapper display>
          <TextField
            fullWidth
            onChange={handleChangeFileName}
            value={
              isNil(allFiles[index].file_display_name)
                ? removeFileExtensionFromString(allFiles[index].file.path)
                : removeFileExtensionFromString(
                    allFiles[index].file_display_name
                  )
            }
            // value={fileNameValue}
            size="small"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  .{getFileExtensionFromString(selectedFile.file.name)}
                </InputAdornment>
              ),
            }}
          />
        </EditableFieldWrapper>
      </td>
      {docGroup ? null : (
        <td>
          <EditableFieldWrapper display>
            <Select
              id="popover-select"
              // labelId={"doc-group"}
              size="small"
              variant="filled"
              fullWidth
              value={allFiles[index].docGroup}
              label="New Category"
              displayEmpty
              sx={{
                opacity: allFiles[index].docGroup === "" ? ".65" : "1",
              }}
              onChange={handleSelectDocGroup}
              // onChange={(e) => setallFiles[index].docGroup(e.target.value)}
            >
              <MenuItem disabled value={""}>
                Select document group
              </MenuItem>
              {createSelectItemsDocGroups().map((i) => (
                <MenuItem value={i.name}>{i.label}</MenuItem>
              ))}
            </Select>
          </EditableFieldWrapper>
        </td>
      )}

      <td
        style={{
          opacity: allFiles[index].docGroup === "" ? ".7" : "1",
          padding: allFiles[index].docGroup === "" ? "4px 6px" : "0px",
        }}
      >
        {allFiles[index].docGroup === "" ? (
          "Document group must first be selected"
        ) : (
          <EditableFieldWrapper display>
            <Select
              id="docTypeSelect"
              labelId={"doc-type"}
              size="small"
              variant="filled"
              fullWidth
              displayEmpty
              // value={docType}
              value={allFiles[index].docType}
              sx={{
                opacity: allFiles[index].docType === "" ? ".65" : "1",
              }}
              label="New Category"
              onChange={handleDocTypeChange}
              // onChange={(e) => setSelectedDocGroup(e.target.value)}
            >
              <MenuItem disabled value={""}>
                Select document type
              </MenuItem>

              {createSelectItemsDocType(allFiles[index].docGroup).map((i) => (
                <MenuItem value={i.name}>{i.label}</MenuItem>
              ))}
              {/* {selectOptionsDocTypes[docGroup] === undefined
                ? []
                : selectOptionsDocTypes[docGroup].map((i) => (
                    <MenuItem value={i.name}>{i.label}</MenuItem>
                  ))} */}
            </Select>
          </EditableFieldWrapper>
        )}
      </td>
      <td>
        <button id="delete" onClick={handleDeleteDocument} type="button">
          <Clear />
        </button>
      </td>
    </tr>
  );
  const filePathContent = (
    <tr>
      <td>{selectedFile.file.path}</td>
    </tr>
  );
  return showDocOptions ? docOptionsContent : filePathContent;
};

export default FileUploadSelectedFileRow;
