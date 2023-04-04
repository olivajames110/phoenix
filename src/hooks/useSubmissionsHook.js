import { isNil } from "lodash";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { apiEndpoints } from "../global/api/apiEndpoints";
import { mapNestedObjectFormData } from "../helpers/mapObjectFormData";

import { setFormData } from "../redux/actions/formDataActions";
import { globalAlertSuccess } from "../redux/actions/globalAlertActions";
import { useAxiosHook } from "./useAxiosHook";

/**
 * TO ADD HERE
 * form
 * get_processing_queue
 * update_collection_from_queue
 * ironlinc_submissions
 * ironlinc_applications
 */

export const useSubmissionsHook = () => {
  const {
    axiosPostIsLoading,
    axiosGetIsLoading,
    axiosError,
    axiosGetRequest,
    axiosPostRequest,
  } = useAxiosHook();

  // Hooks
  const [loading, setLoading] = useState(null);
  const submissionGetIsLoading = axiosGetIsLoading;
  const submissionPostIsLoading = axiosPostIsLoading;
  const error = axiosError;

  const sendForm = async ({
    payload, //required
    name,
    onSuccessFn,
    onFailMsg,
  }) => {
    const endpoint = apiEndpoints.FORM;

    const onRequestSuccess = (data) => {
      if (onSuccessFn) {
        onSuccessFn(data);
      }
      setLoading(null);
    };

    const params = {
      name: name,
      path: endpoint,
      payload,
      onSuccessFn: onRequestSuccess,
      onFailMsg: onFailMsg ? onFailMsg : "Could not submit form",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    await axiosPostRequest(params);
  };

  const sendFormWithFile = async ({
    payload, //required
    name,
    onSuccessFn,
    onFailMsg,
  }) => {
    const endpoint = apiEndpoints.FORM;

    const onRequestSuccess = (data) => {
      if (onSuccessFn) {
        onSuccessFn(data);
      }
      setLoading(null);
    };

    const params = {
      name: name,
      path: endpoint,
      payload: mapNestedObjectFormData(payload),
      onSuccessFn: onRequestSuccess,
      onFailMsg: onFailMsg ? onFailMsg : "Could not submit form",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    };
    await axiosPostRequest(params);
  };

  const sendIronlincSubmission = async ({
    actionCategory, //required
    payload, //required
    name,
    onSuccessFn,
    onFailMsg,
    loadingName,
  }) => {
    if (!isNil(loadingName)) {
      setLoading(loadingName);
    }
    const endpoint = `ironlinc_submissions?actionCategory=${actionCategory}`;
    const onRequestSuccess = (data) => {
      if (onSuccessFn) {
        onSuccessFn(data);
      }
      setLoading(null);
    };

    const params = {
      name: name,
      path: endpoint,
      payload,
      onSuccessFn: onRequestSuccess,
      onFailMsg: onFailMsg ? onFailMsg : "Could not submit form",
    };
    await axiosPostRequest(params);
  };

  const getProcessingQueue = async ({
    name,
    actionCategory,
    onSuccessFn,
    onFailFn,
    loadingName,
  }) => {
    if (!isNil(loadingName)) {
      setLoading(loadingName);
    }
    const endpoint = `get_processing_queue?actionCategory=${actionCategory}`;

    const onRequestSuccess = (data) => {
      // dispatch(setFormData(data));
      if (onSuccessFn) {
        onSuccessFn(data);
      }
      setLoading(null);
    };

    const params = {
      name: isNil(name)
        ? `Get Processing Queue`
        : `Get Processing Queue  - ${name}`,
      path: endpoint,
      onSuccessFn: onRequestSuccess,
      onFailMsg: "Could not fetch processing queue",
      onFailFn,
    };

    await axiosGetRequest(params);
  };

  const updateCollectionFromQueue = async ({
    actionId,
    actionCategory,
    actionOutcome,
    payload,
    name,
    onSuccessFn,
    onFailFn,
    loadingName,
  }) => {
    if (!isNil(loadingName)) {
      setLoading(loadingName);
    }

    const endpoint = `update_collection_from_queue?actionCategory=${actionCategory}?action_id=${actionId}?actionOutcome=${actionOutcome}`;
    const onRequestSuccess = (data) => {
      if (onSuccessFn) {
        onSuccessFn(data);
      }
      setLoading(null);
    };

    const params = {
      name: isNil(name)
        ? `Update Collection From Queue`
        : `Update Collection From Queue  - ${name}`,
      path: endpoint,
      payload,
      onSuccessFn: onRequestSuccess,
      onFailMsg: "Could not update processing queue",
      onFailFn,
    };

    await axiosPostRequest(params);
  };

  return {
    error,
    loading,
    submissionPostIsLoading,
    submissionGetIsLoading,
    updateCollectionFromQueue,
    getProcessingQueue,
    sendForm,
    sendFormWithFile,
    sendIronlincSubmission,
  };
};
