export const setBorrowerProfileState = (state) => {
  return {
    type: "SET_BORROWER_PROFILE_STATE",
    payload: state,
  };
};

export const updateBorrowerProfileState = (data) => {
  return {
    type: "UPDATE_BORROWER_PROFILE_STATE",
    payload: data,
  };
};

export const clearBorrowerProfileState = () => {
  return {
    type: "CLEAR_BORROWER_PROFILE_STATE",
  };
};
