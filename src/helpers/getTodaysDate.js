export const getTodaysDate = (full) => {
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  if (full) {
    let formatted =
      today.toLocaleString("default", { month: "long" }) +
      " " +
      dd +
      ", " +
      yyyy;
    return formatted;
  }
  let formatted = mm + "/" + dd + "/" + yyyy;
  return formatted;
};
