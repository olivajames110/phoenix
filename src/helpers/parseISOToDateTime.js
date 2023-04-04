export const parseISOToDateTime = (string) => {
  if (string === undefined || string === null) {
    return "—";
  }
  if (typeof string === "object") {
    return string;
  }
  let date = new Date(string);

  const time = date.toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: true,
    // timeZone: "UTC",
  });
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  let formattedDate = `${month}/${dt}/${year} @ ${time}`;

  return formattedDate;
};
