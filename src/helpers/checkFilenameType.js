import { isNil } from "lodash";

export const checkFilenameType = (file) => {
  if (file?.file_display_name) {
    return file?.file_display_name;
  }

  if (isNil(file?.file_display_name) && !isNil(file?.originalFilename)) {
    return `${file?.originalFilename}`;
  }

  return "Unknown filename";
};
