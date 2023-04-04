import { isNil, isString } from "lodash";

export const stringProtector = (string, defaultReturn) => {
  const returnVal = isNil(defaultReturn) ? "" : defaultReturn;
  let result = isNil(string) || !isString(string) ? returnVal : string;

  return result;
};
