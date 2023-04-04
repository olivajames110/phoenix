export const setUserState = (state) => {
  return {
    type: "SET_USER_STATE",
    payload: state,
  };
};

export const updateUserState = (data) => {
  return {
    type: "UPDATE_USER_STATE",
    payload: data,
  };
};

export const clearUserState = () => {
  return {
    type: "CLEAR_USER_STATE",
  };
};
