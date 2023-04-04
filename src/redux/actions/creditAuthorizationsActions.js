export const setCreditAuthState = (state) => {
  return {
    type: "SET_CREDIT_AUTH_STATE",
    payload: state,
  };
};

export const updateCreditAuthState = (data) => {
  return {
    type: "UPDATE_CREDIT_AUTH_STATE",
    payload: data,
  };
};
export const addCreditAuth = (data) => {
  return {
    type: "ADD_CREDIT_AUTH",
    payload: data,
  };
};

export const clearCreditAuthState = () => {
  return {
    type: "CLEAR_CREDIT_AUTH_STATE",
  };
};
