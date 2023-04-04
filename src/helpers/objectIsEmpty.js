export const objectIsEmpty = (obj) => {
  if (obj === undefined || obj === null) {
    return true;
  }
  let result = Object.keys(obj).length === 0;
  return result;
};
