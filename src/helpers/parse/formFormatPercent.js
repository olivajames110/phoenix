export const formFormatPercent = (val) => {
  let parsedVal = val > 100 ? 100 : val;
  let formattedVal = `${parsedVal}%`;
  return val !== undefined ? formattedVal : "";
};
