import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateFormData } from "../../../../redux/actions/formDataActions";

import { globalAlertSuccess } from "../../../../redux/actions/globalAlertActions";
import FileUploadSelectedFiles from "../../../form/components/inputs/generic/FileUploadField/FileUploadSelectedFiles";
import { DragAndDropFileUpload } from "../DragAndDropFileUpload";
import "./GeneralDocumentUpload.css";

import { FileUploadOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useFilesHook } from "../../../../hooks/useFilesHook";

/**
 * Desc: Component with File upload box with ability to assign doc groups and doc types to files.
 * Flow: Upload files >  Assign Doc Groups/types > Press submit to upload > POST to UPLOAD_DOCUMENT
 * Inputs: Deal object
 * Outputs: Updates FormData redux state
 */

const documentInit = {
  documents: [],
};
const resultInit = {
  show: false,
  success: false,
};

const GeneralDocumentUpload = (props) => {
  //State
  const [documents, setDocuments] = useState(documentInit);
  const [result, setResult] = useState(resultInit);

  //Redux
  const formData = useSelector((state) => state.formData);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //Hooks

  const { filesPostIsLoading, uploadFiles } = useFilesHook();

  //Functions
  /*Adds docs to state*/
  const addDocuments = (docs) => {
    let spreadDocs = { ...documents };
    let currentDocs = spreadDocs.documents;
    let updatedDocs = [...currentDocs, ...docs];
    let newDocs = {
      documents: updatedDocs,
    };
    console.log("Init Docs Added", newDocs);
    setDocuments(newDocs);
  };

  /*Updates doc group & type*/
  const handleDocumentUpdate = (data) => {
    let spreadDocs = { ...documents };
    let objIndex = spreadDocs.documents.findIndex((d) => data.file.id === d.id);

    console.log("Updated", data.value);
    spreadDocs.documents[objIndex][data.type] = data.value;
    console.log("FULL STATE TO BE SENT ", spreadDocs);
    setDocuments(spreadDocs);
  };

  /*Deletes doc from table/state*/
  const handleDeleteDocument = (id) => {
    console.log("Deleting File: ", id);
    console.log("DOCUMENTS", documents.documents);
    let spreadDocs = { ...documents };
    const fileId = id;
    let objIndex = spreadDocs.documents.findIndex((d) => fileId === d.id);
    console.log("objIndex", objIndex);

    const arrayWithRemoved = spreadDocs.documents.filter(
      (d) => fileId !== d.id
    );

    console.log("updated spreadDocs with removed: ", arrayWithRemoved);

    const updatedDocs = {
      documents: arrayWithRemoved,
    };

    console.log("updatedDocs", updatedDocs);
    setDocuments(updatedDocs);
  };

  /*Sends POST to UPLOAD_DOCUMENT { documents{...} }*/
  const handleUploadDocuments = async (state) => {
    console.log("SUBMITTING FILES", documents);

    let uploadState = {
      docGroup: state.docGroup,
      docType: state.docType,
      userEmail: user.emailAddress,
      documents: documents.documents,
    };

    const onSuccess = (responseData) => {
      console.log("SUCCESS FILE UPLOAD", responseData);
      setDocuments(documentInit);
      dispatch(
        updateFormData({
          key: "documents",
          value: [...formData.documents, ...responseData.items],
        })
      );
      if (props.onSuccess) {
        props.onSuccess();
      }
      setResult({
        show: true,
        success: true,
      });
      dispatch(globalAlertSuccess("File Uploaded Successfully"));
    };

    const onFail = () => {
      setResult({
        show: true,
        success: false,
      });
    };

    const params = {
      name: "Upload Files",
      payload: uploadState,
      dealId: formData?._id,
      ironId: formData?.ironId,
      onSuccessFn: onSuccess,
      onFailFn: onFail,
    };
    uploadFiles(params);
  };

  return (
    <article id={"general-upload"} className="document-upload-group-item">
      {/* <FileDocumentGroupModal /> */}
      <div className="document-upload-card">
        <div className="group-item__body">
          <div className="group-item-section-row">
            <section id="upload-file">
              <div className="general-documents-inner-wrapper">
                <DragAndDropFileUpload
                  dealId={props.dealId}
                  // dealId={props.deal._id}
                  onUpload={addDocuments}
                  result={result}
                  setResult={setResult}
                  docGroup={props.docGroup}
                  // isLoading={true}
                  isLoading={filesPostIsLoading}
                />

                {documents.documents.length >= 1 && (
                  <FileUploadSelectedFiles
                    showDocOptions
                    docGroup={props.docGroup}
                    selectedFiles={documents.documents}
                    onUpdate={handleDocumentUpdate}
                    onDelete={handleDeleteDocument}
                  />
                )}
              </div>
              {documents.documents.length >= 1 && (
                <div className="upload-button-wrapper">
                  {/* <Button
                    id="upload-files-button"
                    onClick={handleUploadDocuments}
                    text="Upload Files"
                    iconRight={<FileUploadOutlined />}
                    color={"blue"}
                  /> */}

                  <LoadingButton
                    id="upload-files-button"
                    onClick={handleUploadDocuments}
                    variant="contained"
                    loading={filesPostIsLoading}
                    endIcon={<FileUploadOutlined />}
                  >
                    Upload Files
                  </LoadingButton>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </article>
  );
};

export default GeneralDocumentUpload;
