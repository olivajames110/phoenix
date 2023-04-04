import { useCallback, useState } from "react";

import axios from "axios";

import { useDispatch } from "react-redux";
import {
  globalAlertFail,
  globalAlertSuccess,
} from "../redux/actions/globalAlertActions";
import { apiDomains } from "../global/api/apiDomains";

export const useAxiosHook = () => {
  //Stytch
  // const stytch = useStytch();
  // const sessionToken = stytch.session.getTokens();
  // let token = sessionToken?.session_token;
  const dispatch = useDispatch();

  //Exported State
  const [axiosPostIsLoading, setAxiosPostIsLoading] = useState(false);
  const [axiosGetIsLoading, setAxiosGetIsLoading] = useState(false);
  const [axiosError, setAxiosError] = useState(null);

  //---Exported Functions---
  //Get Request
  const axiosGetRequest = useCallback(
    async ({ name, path, responseType, onSuccessFn, onFailFn, onFailMsg }) => {
      setAxiosGetIsLoading(true);
      console.log("<--------");
      console.log(
        `%cGET |>| ${name} || path --> ${apiDomains}/${path}`,
        "background: #08a6081e;"
      );

      axios({
        url: `${apiDomains}/${path}`,
        method: "get",
        headers: {
          // Authorization: `Bearer ${token}`,
        },
        responseType: responseType ? responseType : "json",
      })
        .then((response) => {
          const responseData = response.data;

          console.log(
            `%cGET |<| ${name} || Response Data --> `,
            "background: #08a6083b;",
            responseData
          );

          console.log("-------->");
          if (onSuccessFn) {
            onSuccessFn(responseData, response);
          }
          setAxiosGetIsLoading(false);
        })
        .catch((err) => {
          console.log(
            `%cGET |<| ${name} || Error --> `,
            "background: #ff00001a;",
            err
          );
          console.log("-------->");
          setAxiosError(err.message);
          dispatch(globalAlertFail(onFailMsg ? onFailMsg : "Could fetch data"));
          if (onFailFn) {
            onFailFn(err);
            setAxiosPostIsLoading(false);
            return;
          }
          setAxiosGetIsLoading(false);
        });
    },
    []
  );
  // const { user } = useStytchUser();
  // const userId = user?.user_id;
  //Post Request
  const axiosPostRequest = useCallback(
    async ({
      name,
      path,
      payload,
      onSuccessFn,
      onSuccessMsg,
      onFailFn,
      onFailMsg,
      headers,
    }) => {
      setAxiosPostIsLoading(true);
      console.log("<--------");
      console.log(
        `%cPOST |>| ${name} || path --> ${apiDomains}/${path}`,
        "background: #08a6081e;"
      );
      console.log(
        `%cPOST |>| ${name} || payload --> `,
        "background: #08a6081e;",
        payload
      );

      axios({
        url: `${apiDomains}/${path}`,
        method: "post",
        headers: {
          // Authorization: `Bearer ${token}`,
          // userId: userId,
          ...headers,
        },
        data: payload,
      })
        .then((response) => {
          const responseData = response.data;

          console.log(
            `%cPOST |<| ${name} || Response Data --> `,
            "background: #08a6083b;",
            responseData
          );
          console.log("-------->");
          if (onSuccessFn) {
            onSuccessFn(responseData);
          }

          if (onSuccessMsg) {
            globalAlertSuccess(onSuccessMsg);
          }
          setAxiosPostIsLoading(false);
        })
        .catch((err) => {
          console.log(
            `%cPOST |<| ${name} || Error --> `,
            "background: #ff00001a;",
            err
          );
          console.log("-------->");
          setAxiosError(err.message);
          dispatch(
            globalAlertFail(onFailMsg ? onFailMsg : "Could submit data")
          );
          if (onFailFn) {
            onFailFn(err);
            setAxiosPostIsLoading(false);
            return;
          }
          setAxiosPostIsLoading(false);
        });
    },
    []
  );

  return {
    axiosPostIsLoading,
    axiosGetIsLoading,
    axiosError,
    axiosGetRequest,
    // axiosGetBlob,
    axiosPostRequest,
  };
};
