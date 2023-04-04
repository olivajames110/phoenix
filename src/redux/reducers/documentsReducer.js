import { v4 as uuidv4 } from "uuid";

const documentsInitState = [];
// const documentsInitState = {
//   // id: uuidv4(),
//   emailAddress: "",
//   password: "",
// };

const documentsReducer = (state = documentsInitState, action) => {
  switch (action.type) {
    case "SET_DOCUMENTS":
      return action.payload;
    case "UPDATE_DOCUMENTS":
      let newState = { ...state };
      newState[action.payload.key] = action.payload.value;
      return newState;

    case "CLEAR_DOCUMENTS":
      return documentsInitState;

    default:
      return state;
  }
};

export default documentsReducer;
