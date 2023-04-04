import { userTypes } from "../global/userTypes";

export const checkIfValidTableData = (userType) => {
  if (
    userType === userTypes.ADMIN ||
    userType === userTypes.OPS ||
    userType === userTypes.LOAN_OFFICER ||
    userType === userTypes.UNDERWRITER
  ) {
    return true;
  }
  return false;
};
