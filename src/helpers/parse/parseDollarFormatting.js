import { isNil } from "lodash";
import { formFormatDollar } from "./formFormatDollar";

export const parseDollarFormatting = (amt) => {
  if (isNil(amt)) {
    return "";
  }

  const amountString = String(amt);
  const cleanedOriginalAmount_Comma = amountString.replaceAll(",", "");
  const cleanedOriginalAmount_Dollar = cleanedOriginalAmount_Comma.replace(
    "$",
    ""
  );

  const formattedAmount = `$${formFormatDollar(cleanedOriginalAmount_Dollar)}`;

  return formattedAmount;
};
