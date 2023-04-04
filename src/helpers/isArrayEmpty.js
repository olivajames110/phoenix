export const isArrayEmpty = (obj) => {
  // console.log("RESTUL", obj);
  // console.log("!== undefined", obj !== undefined);
  let result =
    JSON.stringify(obj) === "[]" || JSON.stringify(obj) === undefined
      ? true
      : false;
  console.log("RESULT", result);
  return result;
};
