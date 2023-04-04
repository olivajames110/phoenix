import { useStytch, useStytchSession, useStytchUser } from " ";
import { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { apiDomains } from "../../global/api/apiDomains";
import { apiEndpoints } from "../../global/api/apiEndpoints";
import { globalAlertFail } from "../../redux/actions/globalAlertActions";

export const useGetRequest = () => {
  const [getRequestIsLoading, setGetRequestIsLoading] = useState(false);
  const [getRequestError, setGetRequestError] = useState();
  const { session } = useStytchSession();
  const { user } = useStytchUser();
  const userId = user?.user_id;
  const dispatch = useDispatch();
  // const userType = useSelector((state) => state.userType);
  // const borrowerProfile = useSelector((state) => state.borrowerProfile);
  // const user = useSelector((state) => state.user);
  const activeHttpRequests = useRef([]);

  const stytch = useStytch();

  const sessionToken = stytch.session.getTokens();
  let token = sessionToken?.session_token;

  //Functions
  const getRequest = useCallback(
    async (formTypeDestination, requestData = null) => {
      setGetRequestIsLoading(true);

      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Request-Headers": "*",
          Authorization: `Bearer ${token}`,
          userId: userId,
        },
      };
      // console.log("requestOptions", requestOptions);

      try {
        const response = await fetch(
          `${apiDomains}/${formTypeDestination}`,
          requestOptions
        );
        // const responseData = await response.json();
        // console.log("Success", response);
        for (const [key, value] of response.headers.entries()) {
          // console.log("key: ", key, "  |  value: ", value);
        }
        // console.log("Headers", response.getAllResponseHeaders().toLowerCase());

        // const returnData = { response, responseData };
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortController
        );

        if (!response.ok) {
          throw new Error(response);
        }
        // if (!response.ok) {
        //   throw new Error(responseData.message);
        // }

        if (response.status === 200) {
          console.log("GET Success:", response.status);
          setGetRequestIsLoading(false);
          return response;
        }
      } catch (err) {
        console.log("Fail");
        setGetRequestError(err.message);
        setGetRequestIsLoading(false);
        // navigate("/login");
        throw err;
      }
    },
    []
  );

  // const getMyDeals = useCallback(
  //   async (requestData = null, parameters = null) => {
  //     setGetRequestIsLoading(true);

  //     let endpoint;

  //     if (parameters === null) {
  //       endpoint = `getDeals?userEmail=${requestData}`;
  //     }

  //     const httpAbortController = new AbortController();
  //     activeHttpRequests.current.push(httpAbortController);

  //     const requestOptions = {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         "Access-Control-Request-Headers": "*",
  //         Authorization: `Bearer ${token}`,
  //         userId: userId,
  //       },
  //     };
  //     // console.log("requestOptions", requestOptions);

  //     try {
  //       const response = await fetch(
  //         `${apiDomains}/${endpoint}`,
  //         requestOptions
  //       );

  //       activeHttpRequests.current = activeHttpRequests.current.filter(
  //         (reqCtrl) => reqCtrl !== httpAbortController
  //       );

  //       if (!response.ok) {
  //         throw new Error(response);
  //       }

  //       if (response.status === 200) {
  //         console.log("GET Success:", response.status);
  //         setGetRequestIsLoading(false);
  //         return response;
  //       }
  //     } catch (err) {
  //       console.log("Fail");
  //       setGetRequestError(err.message);
  //       setGetRequestIsLoading(false);
  //       throw err;
  //     }
  //   },
  //   []
  // );

  // const getDealByID = useCallback(
  //   async (requestData = null, parameters = null) => {
  //     setGetRequestIsLoading(true);

  //     let endpoint;

  //     if (parameters === null) {
  //       endpoint = `get_deal?dealId=${requestData}`;
  //       // endpoint = `getDeals?dealId=${requestData}`;
  //     }

  //     // if (parameters !== null && parameters.length >= 1)   {
  //     //   parameters.map(p => {})
  //     // }
  //     // const endpointMultuple = `getDeals?userEmail=loanPurpose=Purchase&loanProductType=Fix and Flip`

  //     // let token;

  //     // let token = sessionToken.session_token;
  //     // if (storedData && storedData.emailAddress && storedData.token) {
  //     //   token = storedData.token;
  //     // }

  //     const httpAbortController = new AbortController();
  //     activeHttpRequests.current.push(httpAbortController);

  //     const requestOptions = {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         "Access-Control-Request-Headers": "*",
  //         Authorization: `Bearer ${token}`,
  //         userId: userId,
  //       },
  //     };
  //     console.log("GET Start ---> Endpoint: ", `${apiDomains}/${endpoint}`);

  //     try {
  //       const response = await fetch(
  //         `${apiDomains}/${endpoint}`,
  //         requestOptions
  //       );

  //       activeHttpRequests.current = activeHttpRequests.current.filter(
  //         (reqCtrl) => reqCtrl !== httpAbortController
  //       );

  //       if (!response.ok) {
  //         throw new Error(response);
  //       }

  //       if (response.status === 200) {
  //         console.log("Success--------->", response);
  //         setGetRequestIsLoading(false);
  //         return response;
  //       }
  //     } catch (err) {
  //       console.log("Fail Unauthorized -> Logout");
  //       // navigate("/login");
  //       setGetRequestError(err.message);
  //       setGetRequestIsLoading(false);
  //       throw err;
  //     }
  //   },
  //   []
  // );

  const getDealHeaders = useCallback(
    async (requestData = null, parameters = null) => {
      setGetRequestIsLoading(true);

      let endpoint;

      if (parameters === null) {
        endpoint = `getDealHeaders?userEmail=${requestData}`;
      }
      if (session) {
        console.log(
          "🚀 ~ file: useGetRequest.js ~ line 223 ~ session",
          session
        );
      }

      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Request-Headers": "*",
          Authorization: `Bearer ${token}`,
          userId: userId,
        },
      };

      // console.log("GET HEADERS REQUEST START", requestOptions);

      const response = await fetch(`${apiDomains}/${endpoint}`, requestOptions);

      activeHttpRequests.current = activeHttpRequests.current.filter(
        (reqCtrl) => reqCtrl !== httpAbortController
      );

      if (response.status === 401) {
        console.log("401 Unauthorized--------->", response);
        setGetRequestIsLoading(false);

        return response;
      }
      if (response.status === 200) {
        // console.log("Success--------->", response);
        setGetRequestIsLoading(false);
        return response;
      }
      if (response.status !== 200) {
        // console.log("Success--------->", response);
        dispatch(globalAlertFail("Could not authenticate"));
        return response;
      }
      // try {
      //   const response = await fetch(
      //     `${apiDomains}/${endpoint}`,
      //     requestOptions
      //   );

      //   activeHttpRequests.current = activeHttpRequests.current.filter(
      //     (reqCtrl) => reqCtrl !== httpAbortController
      //   );

      //   if (!response.ok) {
      //     throw new Error(response);
      //   }

      //   if (response.status === 200) {
      //     console.log("GET Success:", response.status);
      //     setGetRequestIsLoading(false);
      //     return response;
      //   }
      // } catch (err) {
      //   console.log("Fetch all deal header request error", err);
      //   // navigate(`/login`);

      //   setGetRequestError(err);
      //   setGetRequestIsLoading(false);
      //   throw err;
      // }
    },
    []
  );

  const getTableHeaders = useCallback(
    async (actionCategory = null, parameters = null) => {
      setGetRequestIsLoading(true);

      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Request-Headers": "*",
          Authorization: `Bearer ${token}`,
          userId: userId,
        },
      };

      // console.log("GET HEADERS REQUEST START", requestOptions);

      const response = await fetch(
        `${apiDomains}/get_processing_queue?actionCategory=${actionCategory}`,
        requestOptions
      );

      activeHttpRequests.current = activeHttpRequests.current.filter(
        (reqCtrl) => reqCtrl !== httpAbortController
      );

      if (response.status === 401) {
        console.log("401 Unauthorized--------->", response);
        setGetRequestIsLoading(false);
        // navigate("/");
        // navigate("/login");
        return response;
      }
      if (response.status === 200) {
        // console.log("Success--------->", response);
        setGetRequestIsLoading(false);
        return response;
      }
      if (response.status !== 200) {
        // console.log("Success--------->", response);
        dispatch(globalAlertFail("Could not authenticate"));
        return response;
      }
    },
    []
  );

  const getDealComments = useCallback(
    async (requestData = null, parameters = null) => {
      setGetRequestIsLoading(true);

      let endpoint;

      if (parameters === null) {
        endpoint = `${apiEndpoints.notes.GET_COMMENTS}?dealId=${requestData}`;
      }

      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Request-Headers": "*",
          Authorization: `Bearer ${token}`,
          userId: userId,
        },
      };
      // console.log("requestOptions", requestOptions);

      try {
        const response = await fetch(
          `${apiDomains}/${endpoint}`,
          requestOptions
        );

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortController
        );

        if (!response.ok) {
          throw new Error(response);
        }

        if (response.status === 200) {
          // console.log("Success--------->", response);
          setGetRequestIsLoading(false);
          return response;
        }
      } catch (err) {
        console.log("Get request error", err);
        // navigate(`/login`);

        setGetRequestError(err);
        setGetRequestIsLoading(false);
        throw err;
      }
    },
    []
  );

  // const getAllDealFilesAsZip = useCallback(
  //   async (formTypeDestination, requestData = null) => {
  //     setGetRequestIsLoading(true);
  //     let chunks = [];

  //     const httpAbortController = new AbortController();
  //     activeHttpRequests.current.push(httpAbortController);

  //     const requestOptions = {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         "Access-Control-Request-Headers": "*",
  //         Authorization: `Bearer ${token}`,
  //         userId: userId,
  //       },
  //     };
  //     // console.log("requestOptions", requestOptions);

  //     const _readBody = async (response) => {
  //       const reader = response.body.getReader();

  //       // Declare received as 0 initially
  //       let received = 0;

  //       // Loop through the response stream and extract data chunks
  //       while (getRequestIsLoading) {
  //         const { done, value } = await reader.read();
  //         if (done) {
  //           // Finish loading
  //           setGetRequestIsLoading(false);
  //           // loading = false;
  //         } else {
  //           // Push values to the chunk array
  //           chunks.push(value);
  //         }
  //       }

  //       // Concat the chinks into a single array
  //       let body = new Uint8Array(received);
  //       let position = 0;

  //       // Order the chunks by their respective position
  //       for (let chunk of chunks) {
  //         body.set(chunk, position);
  //         position += chunk.length;
  //       }

  //       // Decode the response and return it
  //       return new TextDecoder("utf-8").decode(body);
  //     };

  //     try {
  //       const response = await fetch(
  //         `${apiDomains}/${formTypeDestination}`,
  //         requestOptions
  //       );
  //       // const responseData = await response.json();
  //       // console.log("Success", response);
  //       for (const [key, value] of response.headers.entries()) {
  //         // console.log("key: ", key, "  |  value: ", value);
  //       }
  //       // console.log("Headers", response.getAllResponseHeaders().toLowerCase());

  //       // const returnData = { response, responseData };
  //       activeHttpRequests.current = activeHttpRequests.current.filter(
  //         (reqCtrl) => reqCtrl !== httpAbortController
  //       );

  //       if (!response.ok) {
  //         throw new Error(response);
  //       }
  //       // if (!response.ok) {
  //       //   throw new Error(responseData.message);
  //       // }

  //       if (response.status === 200) {
  //         console.log("GET Success:", response.status);
  //         // setGetRequestIsLoading(false);
  //         let results = await _readBody(response);
  //         return JSON.parse(results);
  //       }
  //     } catch (err) {
  //       console.log("Fail");
  //       setGetRequestError(err.message);
  //       setGetRequestIsLoading(false);
  //       // navigate("/login");
  //       throw err;
  //     }
  //   },
  //   []
  // );

  // const getFile = useCallback(async (filename, actionCategory, onSuccess) => {
  //   const endpointActionCategory = `${apiEndpoints.GET_BLOB}?actionCategory=${actionCategory}?filename=${filename}`;
  //   const endpointNormal = `${apiEndpoints.GET_BLOB}?filename=${filename}`;
  //   let endpoint = actionCategory ? endpointActionCategory : endpointNormal;

  //   try {
  //     const response = await getRequest(endpoint);

  //     //Bad request
  //     if (!response.status === 200) {
  //       console.log("Failed", response);

  //       throw new Error(response);
  //     }

  //     //Good request
  //     if (response.status === 200) {
  //       console.log(
  //         "%c ----------- Target -----------",
  //         "background: #dbdf9c;"
  //       );
  //       console.log("200 SUCCESS FOR GETTING FILE", response);
  //       const header = response.headers.get("Content-Disposition");

  //       // console.log(`<<<<<<----------header ---`, responseBlob);

  //       const responseBlob = await response.blob();
  //       console.log("200 SUCCESS FOR GETTING FILE", responseBlob);
  //       // let responseFile = new File([responseBlob], "name");

  //       for (let entry of response.headers.entries()) {
  //         console.log(entry);
  //       }

  //       let convertedPreviewUrl = URL.createObjectURL(responseBlob);
  //       window.open(convertedPreviewUrl);
  //       if (onSuccess) {
  //         onSuccess();
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Fetch image preivew error", error);
  //   }
  // }, []);

  const clearGetError = () => {
    setGetRequestError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return {
    getRequestIsLoading,
    getRequestError,
    getRequest,
    clearGetError,
    // getMyDeals,
    // getDealByID,
    getTableHeaders,
    getDealHeaders,
    getDealComments,
    // getAllDealFilesAsZip,
    // getFile,
  };
};
