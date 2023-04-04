export const setIsLoggedIn = (bool) => {
  return {
    type: "SET_IS_LOGGED_IN",
    payload: bool,
  };
};
export const logInUser = () => {
  return {
    type: "SET_IS_LOGGED_IN",
    payload: true,
  };
};
export const logOutUser = () => {
  return {
    type: "SET_IS_LOGGED_IN",
    payload: false,
  };
};
