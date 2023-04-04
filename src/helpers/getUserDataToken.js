export const getUserDataToken = () => {
  const storedData = JSON.parse(localStorage.getItem("userData"));
  let token;

  if (storedData && storedData.emailAddress && storedData.token) {
    // console.log("Has Token", storedData);
    token = storedData.token;
  } else {
    console.log("Token doesn't exist");
  }

  return token;
};
