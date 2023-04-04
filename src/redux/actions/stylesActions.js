export const setStyles = (state) => {
  return {
    type: "SET_STYLES",
    payload: state,
  };
};

export const updateStyles = (data) => {
  return {
    type: "UPDATE_STYLES",
    payload: data,
  };
};

export const clearStyles = () => {
  return {
    type: "STYLES",
  };
};
