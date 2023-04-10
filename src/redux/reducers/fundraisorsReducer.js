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

const fundraisorsReducer = (state = formInitStat, action) => {
  switch (action.type) {
    case "SET_FUNDRAISORS_STATE":
      return action.payload;
    case "UPDATE_FUNDRAISORS_STATE":
      let spreadState = [...state];
      console.log("old state -->", spreadState);
      let filteredState = spreadState.filter((i) => i.id !== action.payload.id);
      console.log("filteredState", filteredState);
      let updatedState = [...filteredState, { ...action.payload }];
      console.log("updatedState -->", updatedState);
      return updatedState;
    case "ADD_FUNDRAISORS":
      return [...state, action.payload];

    case "CLEAR_FUNDRAISORS_STATE":
      return formInitStat;

    default:
      return state;
  }
};

export default fundraisorsReducer;
