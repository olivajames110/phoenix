export const removeFormatting = (num) => {
  if (num.length > 1) {
    let fs = num
      .replace(/[{()}]/g, "")
      .replaceAll("-", "")
      .replaceAll(" ", "");
    return fs;
  } else {
    return num;
  }
};
