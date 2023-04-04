export const setIsLoading = (bool) => {
  return {
    type: "SET_IS_LOADING",
    payload: bool,
  };
};
export const setIsLoadingTrue = () => {
  return {
    type: "SET_IS_LOADING",
    payload: true,
  };
};
export const setIsLoadingFalse = () => {
  return {
    type: "SET_IS_LOADING",
    payload: false,
  };
};
