import { formatPhoneNum } from "./formatPhoneNumber";
import { removeFormatting } from "./removeFormatting";

export const formatNumberHandler = (event) => {
  let val = event.target.value;
  let filtered = removeFormatting(val).split("");
  let lastKeyEntered = filtered[filtered.length - 1];
  if (!isNaN(lastKeyEntered)) {
    if (val.length < 15) {
      return formatPhoneNum(removeFormatting(val));
      // dispatch(
      //   updateDocuments({
      //     keyName: "phoneNumber",
      //     value: formatPhoneNum(removeFormatting(val)),
      //     // value: removeFormatting(val),
      //   })
      // );
    }
  }
  if (filtered.length === 0) {
    // setValue("");
    return "";
  }
};
