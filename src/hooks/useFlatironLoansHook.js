import { useDispatch } from "react-redux";

import { setFormData } from "../redux/actions/formDataActions";
import { globalAlertSuccess } from "../redux/actions/globalAlertActions";
import { useAxiosHook } from "./useAxiosHook";

export const useFlatironLoansHook = () => {
  const {
    axiosPostIsLoading,
    axiosGetIsLoading,
    axiosError,
    axiosGetRequest,
    axiosPostRequest,
  } = useAxiosHook();

  // Hooks
  const dispatch = useDispatch();
  const flatironLoanGetIsLoading = axiosGetIsLoading;
  const flatironLoanPostIsLoading = axiosPostIsLoading;
  const error = axiosError;
  /** Update Loan Data **
   * Triggers success alert
   * (optional) passes the original payload to updateDealOnSuccess
   */
  const updateLoanData = async ({
    dealId, //required
    ironId, //required
    payload, //required
    onSuccessFn,
  }) => {
    const endpoint = `updateDeal?dealId=${dealId}?ironId=${ironId}`;

    const updateDealOnSuccess = () => {
      dispatch(globalAlertSuccess("Loan Updated Successfully"));
      if (onSuccessFn) {
        onSuccessFn(payload);
      }
    };

    const params = {
      name: "Update Loan Data",
      path: endpoint,
      payload,
      onSuccessFn: updateDealOnSuccess,
      onFailMsg: "Could not save update",
    };

    await axiosPostRequest(params);
  };

  /** Fetch Deal Data **
   * Returns deal object
   * Sets redux formData
   * (optional) passes deal object to OnSuccess
   */
  const fetchDeal = async ({ dealId, ironId, onSuccessFn }) => {
    // const endpoint = `get_deal?dealId=${dealId}`;
    const endpoint = `get_deal?dealId=${dealId}&ironId=${ironId}`; // causes CORS when ironID is incliuded

    const fetchDealOnSuccess = (data) => {
      dispatch(setFormData(data));
      if (onSuccessFn) {
        onSuccessFn(data);
      }
    };

    const params = {
      name: "Fetch Deal",
      path: endpoint,
      onSuccessFn: fetchDealOnSuccess,
      onFailMsg: "Could not fetch deal",
    };

    await axiosGetRequest(params);
  };

  /**  Fetch All Loans **
   * Returns deal array
   * Passes array to onSuccessFn
   */
  const fetchAllDeals = async (onSuccess) => {
    const endpoint = `getDealHeaders?userEmail=*`;

    const params = {
      name: "Get All Deals",
      path: endpoint,
      onSuccessFn: onSuccess,
    };

    await axiosGetRequest(params);
  };

  return {
    error,
    flatironLoanPostIsLoading,
    flatironLoanGetIsLoading,
    fetchDeal,
    fetchAllDeals,
    updateLoanData,
  };
};
