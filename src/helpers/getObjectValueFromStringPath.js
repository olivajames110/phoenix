import { get, isNil } from "lodash";

export const getObjectValueFromStringPath = (
  object,
  pathName,
  defaultReturnValue
) => {
  const returnVal = isNil(defaultReturnValue) ? undefined : defaultReturnValue;
  // const returnVal = isNil(defaultReturnValue) ? "" : defaultReturnValue;
  let value = get(object, pathName);

  if (isNil(value)) {
    return returnVal;
  }
  return value;
};
