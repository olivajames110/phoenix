import documentsReducer from "./documentsReducer";
import formIsValidReducer from "./formIsValidReducer";
import isLoggedInReducer from "./isLoggedInReducer";
import fundraisorsReducer from "./fundraisorsReducer";
import creditAuthorizationsReducer from "./creditAuthorizationsReducer";
import borrowerProfileReducer from "./borrowerProfileReducer";
import userReducer from "./userReducer";
import userTypeReducer from "./userTypeReducer";
import globalAlertReducer from "./globalAlertReducer";
import formDataReducer from "./formDataReducer";
import globalDataReducer from "./globalDataReducer";
import stylesReducer from "./stylesReducer";

import { combineReducers } from "redux";
import isLoadingReducer from "./isLoadingReducer";
import modalReducer from "./modalReducer";
import formDataUpdateReducer from "./formDataUpdateReducer";

const rootReducer = combineReducers({
  formData: formDataReducer,
  formDataUpdate: formDataUpdateReducer,
  userType: userTypeReducer,
  user: userReducer,
  borrowerProfile: borrowerProfileReducer,
  globalAlert: globalAlertReducer,
  fundraisors: fundraisorsReducer,
  creditAuthorizations: creditAuthorizationsReducer,
  documents: documentsReducer,
  isLoading: isLoadingReducer,
  isLoggedIn: isLoggedInReducer,
  modal: modalReducer,
  globalData: globalDataReducer,
  formIsValid: formIsValidReducer,
  styles: stylesReducer,
});

export default rootReducer;
