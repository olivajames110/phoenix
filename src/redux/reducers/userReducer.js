import { v4 as uuidv4 } from "uuid";

const formInitStat = {
  // id: uuidv4(),
  emailAddress: "",
  userType: "",
};

const userReducer = (state = formInitStat, action) => {
  switch (action.type) {
    case "SET_USER_STATE":
      return action.payload;
    case "UPDATE_USER_STATE":
      let newState = { ...state };
      newState[action.payload.key] = action.payload.value;
      return newState;

    case "CLEAR_USER_STATE":
      return formInitStat;

    default:
      return state;
  }
};

export default userReducer;
