export const setUserDataToken = (email, token) => {
  console.log("Setting userData account");
  localStorage.setItem(
    "ironLinc",
    JSON.stringify({
      emailAddress: email,
      token: token,
    })
  );
  // localStorage.setItem(
  //   "userData",
  //   JSON.stringify({
  //     emailAddress: email,
  //     token: token,
  //   })
  // );
};
