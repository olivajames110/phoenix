import { parseISOToDateTime } from "./parseISOToDateTime";

const getLastDayOfMonth = () => {
  const now = new Date();
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return lastDay;
};

export const checkIfDateIsWithinMonth = (string) => {
  // console.log("--");
  let currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth());
  let currentDateMS = currentDate.getTime();
  // console.log("currentDateMS", currentDateMS);

  let nextMonthString = getLastDayOfMonth();
  let nextMonth = new Date(nextMonthString);
  // let targetDateMS = nextMonth.getTime();
  // nextMonth.setMonth(nextMonth.getMonth() + 1);

  let nextMonthMS = nextMonth.getTime();
  // console.log("nextMonthMS", nextMonthMS);

  let targetDate = new Date(string);
  let targetDateMS = targetDate.getTime();
  // console.log("targetDate", targetDateMS);

  let diff = nextMonthMS - currentDateMS;
  // console.log('nextMonthMS - currentDateMS',diff);

  let targetDiff = nextMonthMS - targetDateMS;
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
