export const formatPhoneNum = (num) => {
  console.log("Num:_____________", num);
  let formattedNum;

  if (!num) {
    // setValue("");
    return formattedNum;
  }

  if (num.length >= 7) {
    const splitNum = num.split("");
    splitNum.splice(0, 0, "(");
    splitNum.splice(4, 0, ")");
    splitNum.splice(5, 0, " ");
    splitNum.splice(9, 0, "-");
    formattedNum = splitNum.join("");
    // setValue(formattedNum);
    return formattedNum;
  }

  if (num.length > 3 && num.length <= 6) {
    const splitNum = num.split("");
    splitNum.splice(0, 0, "(");
    splitNum.splice(4, 0, ")");
    splitNum.splice(5, 0, " ");
    formattedNum = splitNum.join("");
    // setValue(formattedNum);
    return formattedNum;
  }
  // setValue(num);
  return formattedNum;
};
