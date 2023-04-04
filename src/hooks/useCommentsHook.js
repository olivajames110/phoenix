import { useDispatch, useSelector } from "react-redux";

import { setFormData } from "../redux/actions/formDataActions";
import { globalAlertSuccess } from "../redux/actions/globalAlertActions";
import { useAxiosHook } from "./useAxiosHook";

export const useCommentsHook = () => {
  const {
    axiosPostIsLoading,
    axiosGetIsLoading,
    axiosError,
    axiosGetRequest,
    axiosPostRequest,
  } = useAxiosHook();

  // Hooks
  const dispatch = useDispatch();
  const commentsGetIsLoading = axiosGetIsLoading;
  const commentsPostIsLoading = axiosPostIsLoading;
  const error = axiosError;
  /** Update Loan Data **
   * Triggers success alert
   * (optional) passes the original payload to updateDealOnSuccess
   */

  const formData = useSelector((state) => state.formData);
  const dealId = formData?._id;
  const ironId = formData?.ironId;

  const postDealComment = async ({
    payload, //required
    onSuccessFn,
    onFailFn,
  }) => {
    const endpoint = `postComment?dealId=${dealId}&ironId=${ironId}`;

    const updateDealOnSuccess = (passedData) => {
      dispatch(globalAlertSuccess("Comment Posted Successfully"));

      if (onSuccessFn) {
        onSuccessFn(passedData);
      }
    };

    const params = {
      name: "Post Comment",
      path: endpoint,
      payload,
      onSuccessFn: updateDealOnSuccess,
      onFailFn,
      onFailMsg: "Could not submit comment",
    };

    await axiosPostRequest(params);
  };

  const getComments = async ({ dealId, ironId, onSuccessFn }) => {
    const endpoint = `getComments?dealId=${dealId}&ironId=${ironId}`;
    // const endpoint = `get_deal?dealId=${dealId}ironId=${ironId}`; // causes CORS when ironID is incliuded

    const onGetCommentsSuccess = (data) => {
      // dispatch(setFormData(data));
      if (onSuccessFn) {
        onSuccessFn(data);
      }
    };

    const params = {
      name: "Fetch Deal",
      path: endpoint,
      onSuccessFn: onGetCommentsSuccess,
      onFailMsg: "Could not fetch deal",
    };

    await axiosGetRequest(params);
  };

  return {
    error,
    commentsPostIsLoading,
    commentsGetIsLoading,
    getComments,
    postDealComment,
  };
};
