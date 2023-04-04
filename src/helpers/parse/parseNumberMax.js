export const parseNumberMax = (value) => {
  console.log(value);
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 3) return onlyNums;
  if (onlyNums.length > 3) {
    return onlyNums.slice(0, 3);
  }
};
