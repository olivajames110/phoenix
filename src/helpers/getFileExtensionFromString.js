export const getFileExtensionFromString = (name) => {
  if (name === null) {
    return "";
  }
  let ext = String(name).split(".").pop();

  return ext;
};
