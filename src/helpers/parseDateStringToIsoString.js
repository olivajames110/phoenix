export const parseDateStringToIsoString = (string) => {
  // console.log("string", string);
  if (string === undefined) {
    return "";
  }
  let date = new Date(string);
  return date.toISOString();
};
