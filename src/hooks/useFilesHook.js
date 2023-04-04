import { saveAs } from "file-saver";
import { isNil } from "lodash";
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { apiEndpoints } from "../global/api/apiEndpoints";
import { mapNestedObjectFormData } from "../helpers/mapObjectFormData";
import { globalAlertSuccess } from "../redux/actions/globalAlertActions";
import { useAxiosHook } from "./useAxiosHook";

/**
 * TO ADD HERE
 * getBlob - finish
 * uploadDocument | UPLOAD_DOCUMENT
 * updateDocument
 * getDocumentMetadata/
 * getDocumentsByDeal
 * getDocumentsByGroup
 */

export const useFilesHook = () => {
  const {
    axiosError,
    axiosPostIsLoading,
    axiosGetIsLoading,
    axiosPostRequest,
    axiosGetRequest,
  } = useAxiosHook();
  const [loadingName, setLoadingName] = useState(null);
  const filesGetIsLoading = axiosGetIsLoading;
  const filesPostIsLoading = axiosPostIsLoading;
  const filesError = axiosError;
  const dispatch = useDispatch();

  const previewFile = useCallback(
    async ({
      filename,
      dealId,
      ironId,
      actionCategory,
      downloadName,
      onSuccessFn,
      loadingName,
    }) => {
      if (!isNil(loadingName)) {
        setLoadingName(loadingName);
      }
      const endpoint_actionCategory = `get_file_by_name?actionCategory=${actionCategory}&file_storage_name=${filename}`; //previously getBlob
      const endpoint = `get_file_by_name?dealId=${dealId}&ironId=${ironId}&file_storage_name=${filename}`; //previously getBlob

      const onSuccess = (responseData, response) => {
        let convertedPreviewUrl = URL.createObjectURL(response.data);

        if (isNil(downloadName)) {
          window.open(convertedPreviewUrl);
        } else {
          saveAs(convertedPreviewUrl, downloadName);
        }
        if (onSuccessFn) {
          onSuccessFn(response);
        }
        setLoadingName(null);
      };

      const params = {
        name: "Download File",
        path: isNil(actionCategory) ? endpoint : endpoint_actionCategory,
        onSuccessFn: onSuccess,
        onFailMsg: "Could not fetch deal",
        responseType: "blob",
      };

      await axiosGetRequest(params);
    },
    []
  );

  const updateFile = useCallback(
    async ({
      payload, //required
      dealId, //required
      ironId, //required
      name,
      onSuccessFn,
      onFailFn,
      loadingName,
    }) => {
      if (!isNil(loadingName)) {
        setLoadingName(loadingName);
      }

      const endpoint = `update_document_metadata?dealId=${dealId}&ironId=${ironId}`; //previously updateDocument
      const onSuccess = (responseData) => {
        if (onSuccessFn) {
          onSuccessFn(responseData);
        }
        setLoadingName(null);
      };

      const onFail = (responseData) => {
        if (onFailFn) {
          onFailFn(responseData);
        }
        setLoadingName(null);
      };

      const params = {
        name: isNil(name) ? "Update File" : name,
        path: endpoint,
        payload: payload,
        onSuccessFn: onSuccess,
        onFailFn: onFail,
      };

      await axiosPostRequest(params);
    },
    []
  );

  const getAllDealFiles = useCallback(
    async ({ name, dealId, ironId, onSuccessFn, loadingName }) => {
      if (!isNil(loadingName)) {
        setLoadingName(loadingName);
      }
      const endpoint = `get_document_metadata?dealId=${dealId}&ironId=${ironId}`; //previously getDocumentMetadata

      const onSuccess = (responseData) => {
        if (onSuccessFn) {
          onSuccessFn(responseData);
        }
        setLoadingName(null);
      };

      const params = {
        name: isNil(name) ? "Get All Deal Files" : name,
        path: endpoint,
        onSuccessFn: onSuccess,
        onFailMsg: "Could not fetch deal documents",
      };

      await axiosGetRequest(params);
    },
    []
  );

  const uploadFiles = useCallback(
    async ({
      payload, //required
      dealId, //required
      ironId, //required
      name,
      onSuccessFn,
      onFailFn,
      loadingName,
    }) => {
      if (!isNil(loadingName)) {
        setLoadingName(loadingName);
      }
      const endpoint = `uploadDocument?dealId=${dealId}&ironId=${ironId}`;
      // const endpoint = apiEndpoints.documents.UPLOAD_DOCUMENT;

      const onSuccess = (responseData) => {
        dispatch(globalAlertSuccess("File Uploaded Successfully"));
        if (onSuccessFn) {
          onSuccessFn(responseData);
        }
        setLoadingName(null);
      };

      const onFail = (responseData) => {
        if (onFailFn) {
          onFailFn(responseData);
        }
        setLoadingName(null);
      };

      const params = {
        name: isNil(name) ? "Upload File" : name,
        path: endpoint,
        payload: mapNestedObjectFormData(payload),
        onSuccessFn: onSuccess,
        onFailFn: onFail,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      await axiosPostRequest(params);
    },
    []
  );

  const downloadFilesAsZip = useCallback(
    async ({
      dealId,
      ironId,
      docGroup,
      downloadName,
      onSuccessFn,
      loadingName,
    }) => {
      if (!isNil(loadingName)) {
        setLoadingName(loadingName);
      }

      const endpoint__allFiles = `getDocumentsByDeal?dealId=${dealId}&ironId=${ironId}`;
      const endpoint__docGroup = `getDocumentsByGroup?dealId=${dealId}&docGroup=${docGroup}`;
      const endpoint = isNil(docGroup)
        ? endpoint__allFiles
        : endpoint__docGroup;

      const onSuccess = (responseData, response) => {
        let convertedPreviewUrl = URL.createObjectURL(response.data);

        saveAs(convertedPreviewUrl, downloadName);
        if (onSuccessFn) {
          onSuccessFn(response);
        }
        setLoadingName(null);
      };

      const params = {
        name: "Download File Group",
        path: endpoint,
        onSuccessFn: onSuccess,
        onFailMsg: "Could not fetch deal group",
        responseType: "blob",
      };

      await axiosGetRequest(params);
    },
    []
  );

  /*** getDealDocumentsByGroup
   *     const endpoint =`${apiEndpoints.documents.GET_DOCUMENTS_BY_DEAL}?dealId=${formData._id}`;;
   * ex. FileDocGroupTableCard
   */

  return {
    filesError,
    loadingName,
    filesGetIsLoading,
    filesPostIsLoading,
    previewFile,
    getAllDealFiles,
    uploadFiles,
    updateFile,
    downloadFilesAsZip,
  };
};
