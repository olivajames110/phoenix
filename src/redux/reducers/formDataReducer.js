const formInitStat = {};
const _ = require("lodash");
const formDataReducer = (state = formInitStat, action) => {
  switch (action.type) {
    case "SET_FORM_DATA":
      return action.payload;
    case "UPDATE_FORM_DATA":
      let newState = { ...state };
      let updatedState = _.set(
        newState,
        action.payload.key,
        action.payload.value
      );
      // newState[action.payload.key] = action.payload.value;
      return updatedState;

    case "CLEAR_FORM_DATA":
      return formInitStat;

    default:
      return state;
  }
};

export default formDataReducer;
