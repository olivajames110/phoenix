export const setFormData = (state) => {
  return {
    type: "SET_FORM_DATA",
    payload: state,
  };
};

export const updateFormData = (data) => {
  return {
    type: "UPDATE_FORM_DATA",
    payload: data,
  };
};

export const clearFormData = () => {
  return {
    type: "CLEAR_FORM_DATA",
  };
};
