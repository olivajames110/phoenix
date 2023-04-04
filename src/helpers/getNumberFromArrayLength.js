export const getNumberFromArrayLength = (array) => {
  // console.log("array", array);
  if (array === undefined) {
    return 0;
  }

  return array.length;
};
