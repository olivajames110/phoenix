export const parseISOString = (string) => {
  // console.log("string", typeof string, string);
  if (string === undefined || string === null) {
    return " ";
  }
  if (typeof string !== "string") {
    return string;
  }
  let b = string.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};
