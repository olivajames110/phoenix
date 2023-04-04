import { isNil } from "lodash";

export const cleanDollarAmount = (amt) => {
  if (isNil(amt)) {
    return "";
  }

  const amountString = String(amt);
  const cleanedOriginalAmount_Comma = amountString.replaceAll(",", "");
  const cleanedOriginalAmount_Dollar = cleanedOriginalAmount_Comma.replace(
    "$",
    ""
  );
  return cleanedOriginalAmount_Dollar;
};
