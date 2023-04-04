export const getTokenizedRequestOptions = (requestType) => {
  const storedData = JSON.parse(localStorage.getItem("userData"));
  let token;

  if (storedData && storedData.emailAddress && storedData.token) {
    // console.log("Has Token", storedData);
    token = storedData.token;
  }

  // const httpAbortController = new AbortController();
  // activeHttpRequests.current.push(httpAbortController);

  const requestOptions = {
    method: requestType === undefined ? requestType : "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Request-Headers": "*",
      Authorization: `Bearer ${token}`,
    },
  };
  return requestOptions;
};
