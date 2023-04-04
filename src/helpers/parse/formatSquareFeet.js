export const formatSquareFeet = (val) => {
  let num = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "sq/ft",
  }).format(val);
  return val;
  // return isNaN(val) ? "" : num;
  // let formattedVal = `${num} sq/ft`;
  // console.log("formattedVal", formattedVal);
  // return formattedVal;
  // return isNaN(val) ? "" : formattedVal;
};
