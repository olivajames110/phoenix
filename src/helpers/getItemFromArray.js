export const getItemFromArray = (array, key, value) => {
  console.log(array, key, value);
  let filteredItem = array.filter((i) => i[key] === value);
  return filteredItem;
};
