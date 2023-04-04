import { isNil } from "lodash";

export const makeEmptyArray = (num) => {
  return Array(isNil(num) ? 10 : num).fill("");
};
