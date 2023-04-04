export const removeSpecialCharacters = (string) => {
  if (typeof string === "object") {
    console.log("object", string);
    return string;
  }
  let str = string;
  // let noDots = str.replace(/\./g, "");
  let result = Number(str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""));
  // let result = Number(str.replace(/[^a-zA-Z0-9 ]/g, ""));

  return result;
};
