import { isNil } from "lodash";

export const formFormatDollar = (val, float, returnVal) => {
  let num = Intl.NumberFormat("en-US").format(val);
  const returnValue = isNil(returnVal) ? "" : returnVal;
  let formattedVal = float ? parseFloat(num).toFixed(float) : num;

  if (returnVal) {
    if (isNaN(val)) {
      return returnVal;
    }
  }
  return isNaN(val) ? returnValue : formattedVal;
};
