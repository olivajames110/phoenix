import { v4 as uuidv4 } from "uuid";

// const formInitStat = [
//   {
//     id: "1234",
//     firstName: "John",
//     lastName: "Smith",
//     submissionDate: "5/12/22",
//   },
// ];
const formInitStat = [];

const dealSubmissionsReducer = (state = formInitStat, action) => {
  switch (action.type) {
    case "SET_DEAL_SUBMISSIONS_STATE":
      return action.payload;
    case "UPDATE_DEAL_SUBMISSIONS_STATE":
      let spreadState = [...state];
      console.log("old state -->", spreadState);
      let filteredState = spreadState.filter((i) => i.id !== action.payload.id);
      console.log("filteredState", filteredState);
      let updatedState = [...filteredState, { ...action.payload }];
      console.log("updatedState -->", updatedState);
      return updatedState;
    case "ADD_DEAL_SUBMISSION":
      return [...state, action.payload];

    case "CLEAR_DEAL_SUBMISSIONS_STATE":
      return formInitStat;

    default:
      return state;
  }
};

export default dealSubmissionsReducer;
