import { isArray, isNil } from "lodash";

export const arrayProtector = (array) => {
  let result = isNil(array) || !isArray(array) ? [] : array;

  return result;
};
