import { parseISOToDateTime } from "./parseISOToDateTime";

const getLastDayOfWeek = () => {
  const date = new Date();

  const lastDay = date.setDate(date.getDate() + 5);
  // const lastDay = new Date(now.getDate() + 7);
  // console.log("lastDay", new Date(lastDay));
  return lastDay;
};

export const checkIfDateIsWithinWeek = (string) => {
  // console.log("--");
  // currentDate.setMonth(currentDate.getMonth());
  let currentDate = new Date();
  let currentDateMS = currentDate.getTime();
  // console.log("currentDateMS", currentDateMS);

  let nextWeekString = getLastDayOfWeek();
  let nextWeek = new Date(nextWeekString);
  let nextWeekMS = nextWeek.getTime();
  // let targetDateMS = nextWeek.getTime();
  // nextWeek.setWeek(nextWeek.getWeek() + 1);

  // console.log("nextWeekMS", nextWeekMS);

  let targetDate = new Date(string);
  let targetDateMS = targetDate.getTime();
  // console.log("targetDate", targetDateMS);

  let diff = nextWeekMS - currentDateMS;
  // console.log('nextWeekMS - currentDateMS',diff);

  let targetDiff = nextWeekMS - targetDateMS;
  // console.log(targetDiff, 'targetDiff',);

  // let comparedDiff = targetDiff - diff;
  // console.log(comparedDiff, 'comparedDiff',);

  if (targetDiff < diff && targetDiff >= 0) {
    //  console.log(`${parseISOToDateTime(string)} --> YES: is within month`);
    return true;
  } else {
    return false;
    //  console.log(`${parseISOToDateTime(string)} --> NO: is NOT within month`);
  }
};
