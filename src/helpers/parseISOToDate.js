export const parseISOToDate = (string, full) => {
  // console.log("%c ----------- Target -----------", "background: #dbdf9c;");
  // console.log("string", typeof string, string);
  if (string === undefined || string === null) {
    return "—";
    // return " ";
  }
  // if (typeof string === "object") {
  //   return string;
  // }
  let dateString = String(string);
  let date = new Date(dateString);
  // let date = new Date(string);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  if (full) {
    let formatted =
      date.toLocaleString("default", { month: "long" }) +
      " " +
      dt +
      ", " +
      year;
    return formatted;
  }

  let formattedDate = month + "/" + dt + "/" + year;

  return formattedDate;
};
