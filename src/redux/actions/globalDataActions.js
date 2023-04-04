export const setGlobalData = (state) => {
  return {
    type: "SET_GLOBAL_DATA",
    payload: state,
  };
};

export const updateGlobalData = (data) => {
  return {
    type: "UPDATE_GLOBAL_DATA",
    payload: data,
  };
};

export const clearGlobalData = () => {
  return {
    type: "CLEAR_GLOBAL_DATA",
  };
};
