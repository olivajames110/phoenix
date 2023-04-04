export const createSelectItemsEmployees = (employees) => {
  console.log("employees", employees);
  let listOptions = [];

  if (employees === undefined || employees === null) {
    return [];
  }

  employees.forEach((e) => {
    listOptions.push(e.fullName);
    // listOptions.push(`${e.firstName} ${e.lastName}`);
  });
  listOptions.sort((a, b) => a.localeCompare(b));

  console.log("list", listOptions);

  return listOptions;
};
