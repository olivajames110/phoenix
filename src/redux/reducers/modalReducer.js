const _ = require("lodash");
const formInitStat = {
  name: null,
  data: null,
};

const modalReducer = (state = formInitStat, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_MODAL":
      console.log("action.payload", action);
      return action.payload;
    case "UPDATE_MODAL":
      newState.name = action.payload.name;
      return newState;
    case "UPDATE_MODAL_DATA":
      newState.data = action.payload;
      return newState;

    case "CLEAR_MODAL":
      return formInitStat;

    default:
      return state;
  }
};

export default modalReducer;
