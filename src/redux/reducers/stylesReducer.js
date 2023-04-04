import { v4 as uuidv4 } from "uuid";

const documentsInitState = {};
// const documentsInitState = {
//   // id: uuidv4(),
//   emailAddress: "",
//   password: "",
// };

const stylesReducer = (state = documentsInitState, action) => {
  switch (action.type) {
    case "SET_STYLES":
      return action.payload;
    case "UPDATE_STYLES":
      let target = {};
      target[action.payload.property] = action.payload.value;
      let newState = { ...state, ...target };
      return newState;

    case "CLEAR_STYLES":
      return documentsInitState;

    default:
      return state;
  }
};

export default stylesReducer;
