import { isNil } from "lodash";

export const parseNumber = (value) => {
  console.log(value);
  if (isNil(value)) return value;

  if (value.includes(".")) {
    return value;
  }
  const onlyNums = Number(value.replace(/[^\d]/g, ""));
  if (onlyNums === 0) {
    return String(onlyNums);
  }

  return onlyNums;
};
