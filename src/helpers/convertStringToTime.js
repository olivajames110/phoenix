export const convertStringToTime = (string) => {
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

  return time;
};
