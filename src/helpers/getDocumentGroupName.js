import { fileDocumentSchema } from "../forms/_formQuestions/_formSchema/fileDocumentSchema";

export const getDocumentGroupName = (docGroup) => {
  // console.log("docGroup", docGroup);
  let docGroupName = fileDocumentSchema[docGroup];

  // console.log("fileDocumentSchema");
  if (docGroupName === undefined) {
    return fileDocumentSchema.noCategory.label;
  }
  let docName = "";
  let name = fileDocumentSchema[docGroup].label;
  return name;
};
