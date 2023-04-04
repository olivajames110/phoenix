export const setDocuments = (state) => {
  return {
    type: "SET_DOCUMENTS",
    payload: state,
  };
};

export const updateDocuments = (data) => {
  return {
    type: "UPDATE_DOCUMENTS",
    payload: data,
  };
};

export const clearDocuments = () => {
  return {
    type: "CLEAR_DOCUMENTS",
  };
};
