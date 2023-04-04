import { useStytchUser } from " ";
import { useState, useCallback, useRef, useEffect } from "react";
import { apiDomains } from "../../global/apiDomains";

export const usePostRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { user } = useStytchUser();
  const userId = user?.user_id;
  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (formTypeDestination, requestData = null) => {
      setIsLoading(true);

      const storedData = JSON.parse(localStorage.getItem("userData"));
      let token;

      if (storedData && storedData.userEmail && storedData.token) {
        // console.log("Login", storedData);
        token = storedData.token;
      }

      const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController);

      const formData = new FormData(requestData);
      // const formData = new FormData();
      // formData.append("key", "value");
      console.log("formData --->", [...formData]);
      // for (const key of requestData) {
      //   formData.append(key, requestData[key]);
      // }
      for (const [key, value] of Object.entries(requestData)) {
        console.log(key, value);
        formData.append(key, value);
      }

      console.log("Example Form Data ---->", formData);
      const requestOptions = {
        method: "POST",
        body: formData,
        // body: JSON.stringify(requestData),
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          userId: userId,
        },
      };
      console.log("requestOptions", requestOptions);
      try {
        const response = await fetch(
          `${apiDomains}/${formTypeDestination}`,
          requestOptions
        );

        const dummyResponseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortController
        );

        if (!response.ok) {
          throw new Error(dummyResponseData.message);
        }

        setIsLoading(false);
        return dummyResponseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
