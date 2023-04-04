export const getSumOfValues = (target, array) => {
  let total = 0;
  console.log("start", target, array);
  if (array === undefined) {
    console.log("Empty, return");
    return total;
  }
  if (array.length === 0) {
    console.log("Empty, return");
    return 0;
  }

  let propertyDoesExist = array?.[0].hasOwnProperty(target);

  if (propertyDoesExist) {
    console.log(" Start Adding ---------->", array);
    array.map(
      (u, i) => (total += array?.[i].hasOwnProperty(target) ? u[target] : 0)
    );
  }

  return total;
};
