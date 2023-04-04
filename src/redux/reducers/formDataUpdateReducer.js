const formInitStat = {};
const _ = require("lodash");

const formDataUpdateReducer = (state = formInitStat, action) => {
  let spreadState = { ...state };
  switch (action.type) {
    case "SET_FORM_DATA_UPDATE":
      return action.payload;
    case "UPDATE_FORM_DATA_UPDATE":
      let updatedState = _.set(
        spreadState,
        action.payload.key,
        action.payload.value
      );
      // spreadState[action.payload.key] = action.payload.value;
      return updatedState;

    case "ADD_FORM_DATA_UPDATE":
      spreadState[action.payload.key] = action.payload.value;
      return spreadState;

    case "REMOVE_FORM_DATA_UPDATE":
      delete spreadState[action.payload.key];
      return spreadState;

    case "CLEAR_FORM_DATA_UPDATE":
      return formInitStat;

    default:
      return state;
  }
};

export default formDataUpdateReducer;
