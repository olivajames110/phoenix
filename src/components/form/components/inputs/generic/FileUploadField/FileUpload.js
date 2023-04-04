import { FormHelperText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm, useFormState } from "react-final-form";
import { v4 as uuidv4 } from "uuid";
import { fileDocumentSchema } from "../../../../../../forms/_formQuestions/_formSchema/fileDocumentSchema";
import { getObjectValueFromStringPath } from "../../../../../../helpers/getObjectValueFromStringPath";
import { getTodaysDate } from "../../../../../../helpers/getTodaysDate";

import Loader from "../../../../../shared/Loader/Loader";

import "./FileUpload.css";
import FileUploadSelectedFiles from "./FileUploadSelectedFiles";

export const FileUpload = ({ required, input, dropZoneProps, ...props }) => {
  // const [previewUrl, setPreviewUrl] = useState("");
  // const [selectedFiles, setSelectedFiles] = useState([]);

  const { values, submitFailed } = useFormState();
  const { change } = useForm();
  // const [files, setFiles] = useState([]);
  // console.log(props);
  const { getRootProps, getInputProps } = useDropzone({
    // accept: {
    //   "image/*": [],
    //   "application/pdf": [".pdf"],
    // },
    multiple: props.maxFiles ? false : true,
    maxFiles: props.maxFiles || 0,
    onDrop: (acceptedFiles) => {
      console.log("props", props);
      console.log("files", acceptedFiles);
      let newFileIds = [];
      const mappedFiles = acceptedFiles.map((file, i) => {
        let uid = uuidv4();
        let newObject = {
          file: Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
          id: uid,
          name: input.name,
          docGroup:
            props.docGroup === undefined
              ? fileDocumentSchema.noCategory.name
              : props.docGroup,
          docType:
            props.docType === undefined
              ? fileDocumentSchema.noCategory.name
              : props.docType,
          // docGroup: props.docGroup === undefined ? input.name : props.docGroup,
          // docType: props.docType ? props.docType : "unknown",
          dateSubmitted: getTodaysDate(),
        };
        newFileIds = [...newFileIds, newObject.id];

        return newObject;
      });
      console.log("mappedFiles", mappedFiles);
      props.onUpload(newFileIds, mappedFiles);
    },
  });

  return (
    <div id="file-upload">
      <div className="file-upload-inner-content">
        <div {...getRootProps({ className: "file-upload-box" })}>
          {props.isLoading ? (
            <Loader style={{ position: "absolute" }} size={32} />
          ) : (
            <>
              <input {...getInputProps()} />
              {uploadIcon}
              <span className="file-upload__title">
                {values[props.name]?.preview
                  ? "Add another file"
                  : "Drag 'n' drop or click to add files"}
              </span>
            </>
          )}
        </div>
      </div>

      {/* {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>} */}
      {/* {props.isRequired &&
        submitFailed &&
        props?.selectedFiles?.length === 0 && (
          <span className="error">Required</span>
        )} */}
    </div>
  );
};
export default FileUpload;
const uploadIcon = (
  <svg id="upload-icon" viewBox="0 0 24 24">
    <path d="M11 15h2V9h3l-4-5-4 5h3z"></path>
    <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
  </svg>
);
