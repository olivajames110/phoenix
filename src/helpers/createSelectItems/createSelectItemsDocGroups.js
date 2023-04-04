const _ = require("lodash");

export const createSelectItemsDocGroups = () => {
  // console.log("createSelectItemsDocGroups attempt");
  let listOptions = [];

  // // if (employees === undefined || employees === null) {
  // //   return [];
  // // }

  // _.forOwn(fileDocumentSchema, (g) => {
  //   listOptions.push({
  //     name: g.name,
  //     label: g.label,
  //   });
  // });
  // // listOptions.sort((a, b) => a.localeCompare(b));
  // listOptions.sort((a, b) => a.label.localeCompare(b.name));
  // console.log("list", listOptions);

  return listOptions;
};
