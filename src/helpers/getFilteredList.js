export const getFilteredList = (array, targetKey, targetValue) => {
  if (array === null || array === undefined) {
    return [];
  }
  const filteredList = array.filter((f) => f[targetKey] === targetValue);
  return filteredList;
};
