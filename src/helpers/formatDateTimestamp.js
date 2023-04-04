export const formatDateTimestamp = (date) => {
  // if (isNaN(date)) return "";
  console.log("date", date);
  // if (date === null) return "12/12/2022";
  let timestamp = Date.parse(date);
  console.log("timestamp", timestamp);
  let newDate = new Date(timestamp);
  let formattedDate = `${newDate.getMonth()}/${newDate.getDay()}/${newDate.getFullYear()}`;

  return formattedDate;
};
