import { isNil } from "lodash";

export const checkFileStorageNameType = (fileObj) => {
  if (fileObj?.file_storage_name) {
    return fileObj?.file_storage_name;
  }

  if (isNil(fileObj?.file_storage_name) && !isNil(fileObj?.filename)) {
    return `${fileObj?.filename}`;
  }

  return undefined;
};
