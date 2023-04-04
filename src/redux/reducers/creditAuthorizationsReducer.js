import { v4 as uuidv4 } from "uuid";

const formInitStat = [];

const creditAuthorizationsReducer = (state = formInitStat, action) => {
  switch (action.type) {
    case "SET_CREDIT_AUTH_STATE":
      return action.payload;
    case "UPDATE_CREDIT_AUTH_STATE":
      let spreadState = [...state];
      console.log("old state -->", spreadState);
      let filteredState = spreadState.filter((i) => i.id !== action.payload.id);
      console.log("filteredState", filteredState);
      let updatedState = [...filteredState, { ...action.payload }];
      console.log("updatedState -->", updatedState);
      return updatedState;
    case "ADD_CREDIT_AUTH":
      return [...state, action.payload];

    case "CLEAR_CREDIT_AUTH_STATE":
      return formInitStat;

    default:
      return state;
  }
};

export default creditAuthorizationsReducer;
