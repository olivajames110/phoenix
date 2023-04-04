export const setFormDataUpdate = (state) => {
  return {
    type: "SET_FORM_DATA_UPDATE",
    payload: state,
  };
};

export const updateFormDataUpdate = ({ key, value }) => {
  return {
    type: "UPDATE_FORM_DATA_UPDATE",
    payload: { key, value },
  };
};
export const addFormDataUpdate = ({ key, value }) => {
  return {
    type: "ADD_FORM_DATA_UPDATE",
    payload: { key, value },
  };
};
export const removeFormDataUpdate = ({ key, value }) => {
  return {
    type: "REMOVE_FORM_DATA_UPDATE",
    payload: { key, value },
  };
};

export const clearFormDataUpdate = () => {
  return {
    type: "CLEAR_FORM_DATA_UPDATE",
  };
};
