export const parseOnlyNumber = (value) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, "");
  return onlyNums;
};
