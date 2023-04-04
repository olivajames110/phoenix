export const cleanFormFieldData = (array, objectToFilter) => {
  let cleanedObject = {};
  // console.log("%c ----------- Target -----------", "background: #dbdf9c;");
  // console.log("START CLEANING-------------------------------");
  array.map((name) => {
    // console.log(name);
    let keyName = Object.keys(name)[0];
    let val = objectToFilter[keyName];
    cleanedObject[keyName] = val;
  });
  return cleanedObject;
};
