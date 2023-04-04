export const isEmptyObject = (obj) => {
  // console.log("RESTUL", obj);
  // console.log("!== undefined", obj !== undefined);
  let result = JSON.stringify(obj) === "{}";
  // console.log("RESTUL", result);
  return result;
};
