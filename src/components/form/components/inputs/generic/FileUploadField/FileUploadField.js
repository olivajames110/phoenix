import { FormHelperText } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Field, useForm, useFormState } from "react-final-form";
import { getObjectValueFromStringPath } from "../../../../../../helpers/getObjectValueFromStringPath";
import { VALIDATOR_REQUIRE } from "../../../../../../helpers/validators/inputValidators";
import FormField from "../../../shared/FormField/FormField";
import FileUpload from "./FileUpload";

const _ = require("lodash");
const FileUploadField = (props) => {
  // const onDocumentUpdate = (data) => {
  const { values, submitFailed } = useFormState();
  const { change } = useForm();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleClearFile = (id) => {
    console.log("deleting file", id);

    if (values.documents !== undefined) {
      let filteredDocs = values.documents.filter((d) => d.id !== id);
      let spreadState = { ...values };

      _.unset(spreadState, props.name);
      delete spreadState.documents;

      spreadState.documents = filteredDocs;

      change(values, spreadState);
    }
  };

  const handleOnUpload = (newFileIds, mappedFiles) => {
    console.log("upload", newFileIds, mappedFiles);
    change(props.name, newFileIds);
    if (props.onUpload) {
      props.onUpload();
    }
    if (values.documents === undefined) {
      change(`documents`, mappedFiles);
      return;
    }
    let spreadState = [...values.documents, ...mappedFiles];

    change(`documents`, spreadState);
  };

  useEffect(() => {
    // console.log("updating");
    if (values.documents !== undefined) {
      // console.log("doc", values.documents, input.name);
      let files = values.documents.filter((f) => f.name === props.name);
      // console.log("files", files);
      setSelectedFiles(files);
    }
  }, [getObjectValueFromStringPath(values, props.name)]);
  return (
    <FormField
      id="file-upload-field"
      noMargin={props.noMargin}
      fieldLabel={props.fieldLabel}
      noPadding={props.noPadding}
      noSidePadding={props.noSidePadding}
    >
      <Field
        name={props.name}
        validate={props.isRequired ? VALIDATOR_REQUIRE : () => undefined}
        docTypeOptions={props.docTypeOptions}
        component={FileUpload}
        onUpload={handleOnUpload}
        selectedFiles={props.selectedFiles}
        // onUpdate={onDocumentUpdate}
        {...props}
      />
      {/* {selectedFiles.length >= 1 && (
        <FileUploadSelectedFiles
          onDelete={handleClearFile}
          selectedFiles={selectedFiles}
        />
      )} */}
      {props.isRequired && submitFailed && selectedFiles?.length === 0 && (
        <span className="error">Required</span>
      )}
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </FormField>
  );
};

export default FileUploadField;
