export const setUserType = (type) => {
  return {
    type: "SET_USER_TYPE",
    payload: type,
  };
};
export const setUserTypeBorrower = (type) => {
  return {
    type: "SET_USER_TYPE_BORROWER",
  };
};

export const setUserTypeAdmin = (type) => {
  return {
    type: "SET_USER_TYPE_ADMIN",
  };
};

export const setUserTypeOps = (type) => {
  return {
    type: "SET_USER_TYPE_OPS",
  };
};
export const clearUserType = (type) => {
  return {
    type: "CLEAR_USER_TYPE",
  };
};
