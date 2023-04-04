import { useDispatch } from "react-redux";

import { setFormData } from "../redux/actions/formDataActions";
import { globalAlertSuccess } from "../redux/actions/globalAlertActions";
import { useAxiosHook } from "./useAxiosHook";

export const useBorrowerHook = () => {
  const {
    axiosPostIsLoading,
    axiosGetIsLoading,
    axiosError,
    axiosGetRequest,
    axiosPostRequest,
  } = useAxiosHook();

  // Hooks
  const getIsLoading = axiosGetIsLoading;
  const postIsLoading = axiosPostIsLoading;
  const error = axiosError;
  const dispatch = useDispatch();

  // -------------------------------------
  // -------------------------------------
  /**
   * GET
   *  - (Global)
   * -- Return/display borrower data (view profile)
   * -- Plaid account connection ?
   * -- Display dashboard messages/comments (messages section on dashboard home)
   * -- Display global level files (all files submitted by user accross all deals) - is this needed?  //Would be for /files page
   * -- Display all credit authorizations (at least info for displaying in table)
   * -- Display full submitted credit authorization info
   * - (Deal)
   * -- Display submitted loan submissions (at least info for displaying in table)
   * -- Display full loan data
   * POST
   * - (Global)
   * -- Submit credit auth
   * -- Submit loan app
   * -- Submit a dashboard message/comment
   * -- Update borrower data/profile info
   * - (Deal)
   * -- Upload file on deal
   * -- Update data on deal
   * -- Add comment on deal
   */
  // -------------------------------------
  // create_external_user
  // //get_user_profile
  // //update_user_profile
  // //get_user_messages
  // post_user_message
  // -------------------------------------
  // -------------------------------------

  /** Get User Profile Data **/
  const getUserProfileData = async ({ onSuccessFn }) => {
    const endpoint = `get_user_profile`;

    const onRequestSuccess = (passedData) => {
      dispatch(setFormData(passedData));
      if (onSuccessFn) {
        onSuccessFn(passedData);
      }
    };

    const params = {
      name: "Get User Profile Data",
      path: endpoint,
      onSuccessFn: onRequestSuccess,
      onFailMsg: "Could not get profile data",
    };

    await axiosGetRequest(params);
  };

  /** Get User Messages **/
  // Returns: array of Global user messages
  const getUserMessages = async ({ onSuccessFn }) => {
    const endpoint = `get_user_messages`;

    const onRequestSuccess = (passedData) => {
      dispatch(setFormData(passedData));
      if (onSuccessFn) {
        onSuccessFn(passedData);
      }
    };

    const params = {
      name: "Get Global User Message",
      path: endpoint,
      onSuccessFn: onRequestSuccess,
      onFailMsg: "Could not get user messages",
    };

    await axiosGetRequest(params);
  };

  /** Update User Profile Data **/
  const updateUserProfileData = async ({
    payload, //required
    onSuccessFn,
  }) => {
    const endpoint = `update_user_profile`;

    const onRequestSuccess = () => {
      dispatch(globalAlertSuccess("Profile Updated Successfully"));
      if (onSuccessFn) {
        onSuccessFn(payload);
      }
    };

    const params = {
      name: "Update User Profile",
      path: endpoint,
      payload,
      onSuccessFn: onRequestSuccess,
      onFailMsg: "Could not update",
    };

    await axiosPostRequest(params);
  };

  /** Update User Profile Data **/
  // Returns: updated array of Global user messages
  const postUserMessage = async ({
    payload, //required
    onSuccessFn,
  }) => {
    const endpoint = `post_user_message`;

    const onRequestSuccess = (passedData) => {
      dispatch(globalAlertSuccess("Submission Successful"));
      if (onSuccessFn) {
        onSuccessFn(passedData);
      }
    };

    const params = {
      name: "Post User Comment",
      path: endpoint,
      payload,
      onSuccessFn: onRequestSuccess,
      onFailMsg: "Could not post comment",
    };

    await axiosPostRequest(params);
  };

  return {
    error,
    postIsLoading,
    getIsLoading,
    getUserProfileData,
    getUserMessages,
    postUserMessage,
    updateUserProfileData,
  };
};
