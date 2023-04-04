const formInitStat = {};
const _ = require("lodash");
const globalDataReducer = (state = formInitStat, action) => {
  switch (action.type) {
    case "SET_GLOBAL_DATA":
      return action.payload;
    case "UPDATE_GLOBAL_DATA":
      let newState = { ...state };
      let updatedState = _.set(
        newState,
        action.payload.key,
        action.payload.value
      );
      // newState[action.payload.key] = action.payload.value;
      return updatedState;

    case "CLEAR_GLOBAL_DATA":
      return formInitStat;

    default:
      return state;
  }
};

export default globalDataReducer;
