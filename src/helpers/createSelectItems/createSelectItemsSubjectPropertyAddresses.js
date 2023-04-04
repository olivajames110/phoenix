export const createSelectItemsSubjectPropertyAddresses = (address) => {
  console.log("address", address);
  let listOptions = [];

  if (address === undefined || address === null) {
    return [];
  }

  // if (address.address !== undefined) {
  //   console.log('address.address');
  //   address.forEach((a, index) => {
  //     console.log(a);
  //     listOptions.push({
  //       name: index,
  //       label: `${a.address.address.fullAddress}`,
  //     });
  //   });
  // }

  console.log("address.");
  address.forEach((a, index) => {
    console.log("a", a);
    if (a.address.address !== undefined) {
      listOptions.push({
        name: index,
        label: `${a.address.address.fullAddress}`,
      });
    }
    if (a.address.address === undefined) {
      listOptions.push({ name: index, label: `${a.address.fullAddress}` });
    }
  });

  // listOptions.sort((a, b) => a.localeCompare(b));

  console.log("list", listOptions);

  return listOptions;
};
