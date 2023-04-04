import { isNil, isObject } from "lodash";

export const objectProtector = (object, defaultReturn) => {
  const returnVal = isNil(defaultReturn) ? {} : defaultReturn;
  let result = isNil(object) || !isObject(object) ? returnVal : object;

  return result;
};
