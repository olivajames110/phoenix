export const getIronLincToken = (full) => {
  const storedData = JSON.parse(localStorage.getItem("ironLinc"));

  if (full) {
    return storedData;
  }
  let token;

  if (storedData && storedData.emailAddress && storedData.token) {
    // console.log("Has Token", storedData);
    token = storedData.token;
  } else {
    token = undefined;
  }

  return token;
};
