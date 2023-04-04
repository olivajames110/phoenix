export const parseDollar = (value) => {
  if (!value) return value;

  const onlyNums = Number(value.replace(/[^\d]/g, ""));

  if (onlyNums === 0) {
    console.log("onlyNums", onlyNums);
    return String(onlyNums);
  }

  let num = Intl.NumberFormat("en-US").format(onlyNums);
  // let formattedVal = `$${val}`;
  // console.log("formattedVal", formattedVal);
  // return formattedVal;
  return num;
};
