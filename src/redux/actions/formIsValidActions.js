export const setIsFormIsValid = (bool) => {
  return {
    type: "SET_FORM_IS_VALID",
    payload: bool,
  };
};
export const setIsFormIsValidTrue = () => {
  return {
    type: "SET_FORM_IS_VALID",
    payload: true,
  };
};
export const setIsFormIsValidFalse = () => {
  return {
    type: "SET_FORM_IS_VALID",
    payload: false,
  };
};
