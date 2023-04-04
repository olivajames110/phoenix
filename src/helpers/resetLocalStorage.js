export const resetLocalStorage = () => {
  localStorage.removeItem("userData");
  localStorage.removeItem("userType");
  localStorage.removeItem("auth");
  localStorage.removeItem("ironLinc");
};
