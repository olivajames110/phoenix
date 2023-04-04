import { isNil, isString } from "lodash";

export const removeEmailAddressFromString = (emailAddress) => {
  if (
    isNil(emailAddress) ||
    emailAddress === null ||
    emailAddress === undefined ||
    !isString(emailAddress)
  ) {
    return "";
  }
  if (emailAddress.length < 1) {
    return "";
  }
  let ext = emailAddress.match(/^(.+)@/)[1];
  return ext;
};
