import { useState, useCallback, useRef, useEffect } from "react";
import { useStytch, useStytchSession, useStytchUser } from " ";

import { apiDomains } from "../../global/api/apiDomains";
import { apiEndpoints } from "../../global/api/apiEndpoints";
import { getIronLincToken } from "../../helpers/getIronLincToken";

import {
  mapNestedObjectFormData,
  mapObjectFormData,
} from "../../helpers/mapObjectFormData";

export const usePostRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [errorStatus, setErrorStatus] = useState();
  const { session } = useStytchSession();
  const activeHttpRequests = useRef([]);
  //Stytch
  const stytch = useStytch();
  const { user } = useStytchUser();
  const userId = user?.user_id;

  const sessionToken = stytch.session.getTokens();
  let token = sessionToken?.session_token;

  const sendRequest = useCallback(
    async (formTypeDestination, requestData = null) => {
      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      setIsLoading(true);

      let formData;

      if (formTypeDestination === apiEndpoints.LOGIN) {
        formData = mapObjectFormData(requestData);
      } else {
        formData = mapNestedObjectFormData(requestData);
      }

      const requestOptions = {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          userId: userId,
        },
      };

      console.log(
        formTypeDestination,
        "POST Start: ",
        `${apiDomains}/${formTypeDestination}`
      );
      try {
        const response = await fetch(
          `${apiDomains}/${formTypeDestination}`,
          requestOptions
        );

        // console.log("Response in Try statement", response);
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortController
        );

        if (!response.ok) {
          throw new Error(response);
        }

        if (response.status === 200) {
          console.log(formTypeDestination, "POST End:", response.status);
          setIsLoading(false);
          return response;
        }
      } catch (err) {
        console.log("Fail");
        setError(err.message);
        setErrorStatus(err.status);

        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  //Sends post with token
  const sendPostRequest = useCallback(
    async (formTypeDestination, requestData = null) => {
      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      setIsLoading(true);

      // let token = getIronLincToken();
      // let token = session.session_id;
      let formData;
      formData = mapObjectFormData(requestData);

      const requestOptions = {
        method: "POST",
        body: formData,
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
          userId: userId,
        },
      };
      // console.log("requestOptions", requestOptions);
      console.log(
        formTypeDestination,
        "POST Start: ",
        `${apiDomains}/${formTypeDestination}`
      );
      try {
        const response = await fetch(
          `${apiDomains}/${formTypeDestination}`,
          requestOptions
        );

        // console.log("Response in Try statement", response);
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortController
        );

        if (!response.ok) {
          throw new Error(response);
        }

        if (response.status === 200) {
          console.log(formTypeDestination, "POST End:", response.status);
          setIsLoading(false);
          return response;
        }
      } catch (err) {
        console.log("Fail");
        setError(err.message);
        setErrorStatus(err.status);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  //Sends post without token
  const sendResponseRequest = useCallback(
    async (formTypeDestination, requestData = null) => {
      setIsLoading(true);

      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      const formData = mapObjectFormData(requestData);
      // const formBodyData = new URLSearchParams(formData);
      const requestOptions = {
        method: "POST",
        body: formData,
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      try {
        const response = await fetch(
          `${apiDomains}/${formTypeDestination}`,
          requestOptions
        );

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortController
        );

        if (!response.ok) {
          console.log("not ok", response);
          setIsLoading(false);
          setError(response);
          return response;
          // throw new Error(response);
        }

        // const result = response.json();
        // return result;
        return response;
        // if (response.status === 200) {
        //   console.log("Success--------->", response);
        //   setIsLoading(false);
        //   return response;
        // }
      } catch (err) {
        console.log("Fail");
        console.log("err", err.response);
        // setError(err.message);
        setErrorStatus(err.status);
        setIsLoading(false);
        // throw err;
        const result = {
          error: err,
          status: 500,
        };
        return result;
      }
    },
    []
  );

  const sendRequestWithoutBody = useCallback(
    async (formTypeDestination, requestData = null) => {
      setIsLoading(true);

      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      // const formData = mapObjectFormData(requestData);
      // const formBodyData = new URLSearchParams(formData);
      const requestOptions = {
        method: "POST",
        body: "",
        headers: {
          "Access-Control-Request-Headers": "*",
        },
      };

      try {
        console.log(
          "Request Desitination: --> ",
          `${apiDomains}/${formTypeDestination}`
        );
        const response = await fetch(
          `${apiDomains}/${formTypeDestination}`,
          requestOptions
        );

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortController
        );

        if (!response.ok) {
          throw new Error(response);
        }

        if (response.status === 200) {
          console.log("Success--------->", response);
          setIsLoading(false);
          return response;
        }
      } catch (err) {
        console.log("Fail");
        setError(err.message);
        setErrorStatus(err.status);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const sendAzureFunctionRequest = useCallback(async (requestData = null) => {
    const httpAbortController = new AbortController();
    activeHttpRequests.current.push(httpAbortController);

    setIsLoading(true);

    // **Form data**
    let formData = mapNestedObjectFormData(requestData);
    const requestOptions = {
      method: "POST",
      body: formData,
    };

    try {
      const response = await fetch(
        `https://ironlincapimanagement.azure-api.net/ironlinc-applications/HttpTrigger1`,
        // `https://ironlinc-applications.azurewebsites.net/api/HttpTrigger1`,
        requestOptions
      );

      // console.log("Response in Try statement", response);
      activeHttpRequests.current = activeHttpRequests.current.filter(
        (reqCtrl) => reqCtrl !== httpAbortController
      );

      if (!response.ok) {
        throw new Error(response);
      }

      if (response.status === 200) {
        console.log(
          "----------------End Successful Form Request--------->",
          response
        );
        setIsLoading(false);
        return response;
      }
    } catch (err) {
      console.log("Fail");
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  }, []);

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return {
    isLoading,
    error,
    errorStatus,
    sendRequest,
    sendPostRequest,
    sendResponseRequest,
    sendRequestWithoutBody,
    sendAzureFunctionRequest,
    clearError,
  };
};
