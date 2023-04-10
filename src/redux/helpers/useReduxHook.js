import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userTypes } from "../../global/userTypes";
import { clearBorrowerProfileState } from "../actions/borrowerProfileActions";
import { globalAlertReset } from "../actions/globalAlertActions";
import { clearCreditAuthState } from "../actions/creditAuthorizationsActions";
import { clearDealSubmissionsState } from "../actions/fundraisorsActions";
import { clearDocuments } from "../actions/documentsActions";
import { clearFormData } from "../actions/formDataActions";
import { clearGlobalData } from "../actions/globalDataActions";
import { logOutUser } from "../actions/isLoggedInActions";
import { clearStyles } from "../actions/stylesActions";
import { clearUserState } from "../actions/userActions";
import { clearUserType } from "../actions/userTypeActions";

export const useReduxHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.userType);

  const handleLogoutUser = () => {
    console.log("LOGOUT");
    localStorage.removeItem("userData");
    localStorage.removeItem("auth");
    localStorage.removeItem("ironLinc");
    // dispatch(clearDealSubmissionsState());
    dispatch(clearCreditAuthState());
    dispatch(clearDocuments());
    dispatch(clearFormData());
    dispatch(clearBorrowerProfileState());
    dispatch(clearGlobalData());
    dispatch(clearStyles());
    dispatch(globalAlertReset());
    dispatch(clearUserType());
    dispatch(clearUserState());
    dispatch(logOutUser());
    navigate("/login");
  };

  const handleCheckIfEmployee = (passedUserType) => {
    let user = "";

    if (passedUserType === undefined) {
      user = userType;
    } else {
      user = passedUserType;
    }

    if (
      user === userTypes.ADMIN ||
      user === userTypes.OPS ||
      user === userTypes.UNDERWRITER ||
      user === userTypes.LOAN_OFFICER
    ) {
      return true;
    }

    if (userType === userTypes.BORROWER) {
      return false;
    }
  };

  const handleCheckIfAdminPermissions = () => {
    if (userType === userTypes.ADMIN || userType === userTypes.UNDERWRITER) {
      return true;
    } else {
      return false;
    }
  };

  return {
    handleCheckIfAdminPermissions,
    handleCheckIfEmployee,

    handleLogoutUser,
  };
};
