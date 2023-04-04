import { fileDocumentSchema } from "../forms/_formQuestions/_formSchema/fileDocumentSchema";

const _ = require("lodash");

export const getSelectItemsDocGroupType = (docType) => {
  console.log("START DOC TYPE", docType);
  // let docGroupName = fileDocumentSchema[docGroup];
  if (docType === undefined || docType === null) {
    return fileDocumentSchema.noCategory.label;
  }
  let result = "";
  _.forOwn(fileDocumentSchema, function (value, key) {
    // console.log("value", value);
    // console.log("key", key);
    let group = fileDocumentSchema[key].types[docType];
    console.log("group", group);
    if (group !== undefined) {
      console.log(
        "%c ----------- Target -----------",
        "background: #dbdf9c;",
        group.label
      );
      result = group.label;
    }
  });
  // let result = _.find(fileDocumentSchema, el => el.name.first === 'Test');

  console.log("result", result);

  if (result === undefined) {
    return fileDocumentSchema.noCategory.label;
  }
  return result;
  // if (docGroupName === undefined) {
  //   return "";
  // }

  // let name = fileDocumentSchema[docGroup].label;
  // return name;
};
