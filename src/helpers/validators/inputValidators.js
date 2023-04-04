import { validateEmail } from "../validateEmail";

const checkIfValidZip = (string) => {
  const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(string);
  // console.log("isV", isValidZip);
  return isValidZip ? true : false;
};

export const VALIDATOR_REQUIRE = (value) =>
  value || 0 ? undefined : "Required";

export const VALIDATOR_REQUIRE_NO_MESSAGE = (value) =>
  checkIfValidZip(value) ? undefined : " ";

export const VALIDATOR_IS_ZIP = (value) =>
  checkIfValidZip(value) ? undefined : "Required";

export const VALIDATOR_REQUIRE_NUM = (value) =>
  isNaN(value) ? "Must be a number" : undefined;

export const VALIDATOR_MIN_CHAR = (min) => (value) =>
  value.length >= min ? undefined : `Should be greater than ${min}`;

export const VALIDATOR_EMAIL = (value) =>
  validateEmail(value) === null ? "Valid email required" : undefined;
