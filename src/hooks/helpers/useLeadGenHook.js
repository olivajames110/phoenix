import { isArray, isNil } from "lodash";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { leadGenerationEndpoints } from "../../global/api/apiEndpoints";
import { arrayProtector } from "../../helpers/arrayProtector";
import {
  setFormData,
  updateFormData,
} from "../../redux/actions/formDataActions";
import {
  globalAlertFail,
  globalAlertSuccess,
} from "../../redux/actions/globalAlertActions";
import { clear_business_search } from "../../tests/clear_business_search";
import { DUMMY_XML } from "../../tests/dummyXML";
import { DUMMY_PERSON_XML } from "../../tests/DUMMY_PERSON_XML";
import { usePostRequest } from "./usePostRequest";

export const useLeadGenHook = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const { isLoading, error, sendRequest } = usePostRequest();
  const [leadGenHookIsLoading, setleadGenHookIsLoading] = useState(false);

  const updateAndIncrement = (target, data) => {
    console.log("TARGET: ", target);
    console.log("DATA: ", data);
    console.log("formData: ", formData);
    let newData = { ...formData };
    const nextStep = isNil(formData?.activeStep) ? 1 : formData?.activeStep + 1;

    newData.activeStep = nextStep;
    newData[target] = data;
    console.log("newData before dispatch: ", newData);
    dispatch(setFormData(newData));
  };

  const update = useCallback(async (key, value) => {
    dispatch(
      updateFormData({
        key,
        value,
      })
    );
  });

  const getSelectedBusiness = (id) => {
    const business_search_entities = formData.clear_business_search_list;

    const filteredItem = arrayProtector(business_search_entities).filter(
      (item) => item.group_id === formData.clear_business_search_id
    );

    const selected = arrayProtector(filteredItem)[0];
    return selected;
  };

  const handleEntitySearch = async (formState) => {
    setleadGenHookIsLoading(true);
    console.log("SUBMITTING Leadgen Business Search", formState);
    delete formState.formType;
    const endpoint = `clear_business_search`;
    // const endpoint = `ironlinc_submissions?actionCategory=invoice`;

    let data;

    data = formState;

    console.log("Lead Gen Business Search Endpoint --->", endpoint);
    console.log("Lead Gen Business Search Data --->", data);

    // if (formData.isDemo) {
    //   updateAndIncrement("clear_business_search", clear_business_search);
    //   return;
    // }
    updateAndIncrement("clear_business_search_list", clear_business_search);
    return;
    try {
      const response = await sendRequest(endpoint, data);

      if (!response.status === 200) {
        console.log("Failed Login", response);
        setleadGenHookIsLoading(false);
        throw new Error(response);
      }

      if (response.status === 200) {
        console.log("SUCCESSFUL Lead Entity Search", response);
        const responseData = await response.json();
        console.log(" Lead Entity Search ~ responseData:", responseData);
        // if (isObject(responseData) && !isArray(responseData.data)) {
        //   console.log("Is Object");
        //   let arr = [];
        //   arr.push(responseData);
        //   console.log("Arr", arr);
        //   // handleOnComplete(arr);

        //   updateAndIncrement("clear_business_search_list", arr);
        //   // props.onComplete(arr);
        //   return;
        // }

        if (isArray(responseData.data)) {
          updateAndIncrement("clear_business_search_list", responseData.data);
          // props.onComplete(responseData.data);
          return;
        }

        return [];
      }
    } catch (error) {
      dispatch(globalAlertFail("Could not submit"));
      console.log(
        "%c ----------- Error -----------",
        "background: #dbdf9c;",
        error
      );
      setleadGenHookIsLoading(false);
    }
  };

  const handlePullBusinessXML = async (formState) => {
    setleadGenHookIsLoading(true);
    const endpoint = leadGenerationEndpoints.CLEAR_BUSINESS_XML;
    // const endpoint = `ironlinc_submissions?actionCategory=invoice`;

    // const business_search_entities = formData.clear_business_search_list;

    // const filteredItem = arrayProtector(business_search_entities).filter(
    //   (item) => item.group_id === formData.id
    // );

    // const data = arrayProtector(filteredItem)[0];
    const data = getSelectedBusiness();

    console.log("Lead Gen ~ Business XML Pull ~ Endpoint --->", endpoint);
    console.log("Lead Gen ~ Business XML Pull ~ Data --->", data);
    // dispatch(globalAlertFail("Could not pull XML"));
    // handleOnComplete(DUMMY_XML);
    if (formData.isDemo) {
      updateAndIncrement("clear_business_pulled_xml", DUMMY_XML);
      return;
    }
    setleadGenHookIsLoading(false);
    return;
    try {
      const response = await sendRequest(endpoint, data);

      if (!response.status === 200) {
        console.log("Failed Login", response);
        setleadGenHookIsLoading(false);
        throw new Error(response);
      }

      if (response.status === 200) {
        dispatch(globalAlertSuccess("XML Successfully Pulled"));
        console.log("SUCCESSFUL XML Pull", response);
        console.log("response", response);
        const responseData = await response.json();
        console.log("responseData", responseData);
        updateAndIncrement("clear_business_pulled_xml", responseData.data);
        setleadGenHookIsLoading(false);
        // handleOnComplete(responseData.data);
        return;
      }
    } catch (error) {
      dispatch(globalAlertFail("Could not pull XML"));
      console.log(
        "%c ----------- Error -----------",
        "background: #dbdf9c;",
        error
      );
      setleadGenHookIsLoading(false);
    }
  };

  const handleClearPersonSearch = useCallback(
    async (data = null, parameters = null) => {
      setleadGenHookIsLoading(true);
      const endpoint = `clear_person_search`;

      console.log("Clear Person Search Endpoint --->", endpoint);
      console.log("Clear Person Search Data --->", data);

      // update("clear_person_search_list", []);
      update("clear_person_search_list", DUMMY_PERSON_XML);
      setleadGenHookIsLoading(false);
      return;
      try {
        const response = await sendRequest(endpoint, data);

        if (!response.status === 200) {
          console.log("Failed Login", response);
          setleadGenHookIsLoading(false);
          throw new Error(response);
        }

        if (response.status === 200) {
          console.log("Clear Person ~ response", response);

          const responseData = await response.json();
          console.log("Clear Person ~ responseData", responseData);

          setleadGenHookIsLoading(false);
          return responseData.data;
        }
      } catch (error) {
        setleadGenHookIsLoading(false);
        console.log(
          "%c ----------- Error -----------",
          "background: #dbdf9c;",
          error
        );
      }
    },
    []
  );

  const handlePullPersonXML = async (person) => {
    const endpoint = leadGenerationEndpoints.CLEAR_PERSON_XML;
    // const endpoint = `ironlinc_submissions?actionCategory=invoice`;

    // let data = formData.clear_person_search[0];

    console.log("Clear Person XML Endpoint --->", endpoint);
    console.log("Clear Person XML Data --->", person);
    // dispatch(globalAlertFail("Could not pull XML"));
    // handleOnComplete(DUMMY_XML);
    // return;
    // if (formData.isDemo) {
    //   updateAndIncrement(endpoint, DUMMY_XML);
    //   return;
    // }
    let spreadArray = isArray(formData.clear_person_pulled_xml_list)
      ? formData.clear_person_pulled_xml_list
      : [];

    let data = person;
    // let data = { asd: 23123, bbb: 23 };
    spreadArray.push(data);
    // let updatedArr = [...original, data];
    console.log("🚀 updated list", spreadArray);
    update("clear_person_pulled_xml_list", spreadArray);
    return;
    try {
      const response = await sendRequest(endpoint, person);

      if (!response.status === 200) {
        console.log("Failed Login", response);
        throw new Error(response);
      }

      if (response.status === 200) {
        // dispatch(globalAlertSuccess("XML Successfully Pulled"));
        console.log("SUCCESSFUL PERSON XML Pull", response);
        console.log("response", response);
        const responseData = await response.json();
        console.log("responseData", responseData);
        // handleOnComplete(responseData.data);
        // updateAndIncrement("clear_person_xml_list", responseData.data);
        let spreadArray = isArray(formData.clear_person_pulled_xml_list)
          ? formData.clear_person_pulled_xml_list
          : [];

        let data = responseData.data;
        spreadArray.push(data);
        // let updatedArr = [...original, data];
        console.log("🚀 spreadArray", spreadArray);
        updateAndIncrement("clear_person_pulled_xml_list", spreadArray);
        return responseData.data;
      }
    } catch (error) {
      // dispatch(globalAlertFail("Could not pull XML"));
      console.log(
        "%c ----------- Error -----------",
        "background: #dbdf9c;",
        error
      );
    }
  };

  const handleReset = () => {
    // setTableData([]);
    let newFormData = {
      activeStep: 0,
      clear_business_search_list: [], //array
      clear_business_search_id: "", //string //data,group_id
      clear_business_pulled_xml: {}, //object
      clear_person_search_list: [], //array
      clear_person_xml_staging_list: [], //array
      clear_person_pulled_xml_list: [], //array
    };

    // let newFormData = {
    //   activeStep: 0,
    //   clearBusinessSearchData: {},
    //   clear_business_xml: {},
    //   clearPersonSearchData: {},
    //   clearPersonXMLData: {},
    //   entityData: {},
    //   xmlData: {},
    // };

    dispatch(setFormData(newFormData));
  };

  return {
    leadGenHookIsLoading,
    handleReset,
    update,
    getSelectedBusiness,
    handleEntitySearch,
    handlePullBusinessXML,
    handleClearPersonSearch,
    handlePullPersonXML,
    updateAndIncrement,
  };
};
