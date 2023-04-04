export const removeFileExtensionFromString = (name) => {
  if (name === null) {
    return "";
  }
  let ext = String(name).replace(/\.[^/.]+$/, "");

  return ext;
};
