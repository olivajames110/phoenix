export const setModal = (state) => {
  return {
    type: "SET_MODAL",
    payload: state,
  };
};

export const updateModal = (data) => {
  return {
    type: "UPDATE_MODAL",
    payload: data,
  };
};

export const updateModalData = (data) => {
  return {
    type: "UPDATE_MODAL_DATA",
    payload: data,
  };
};

export const clearModal = () => {
  return {
    type: "CLEAR_MODAL",
  };
};
