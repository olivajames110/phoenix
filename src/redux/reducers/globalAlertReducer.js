const globalAlertInit = {
  show: false,
  success: null,
  message: "",
  type: "",
};
const globalAlertSucces = {
  show: true,
  success: true,
  message: "",
  type: "success",
};
const globalAlertFail = {
  show: true,
  success: false,
  message: "",
  type: "error",
};

const globalAlertReducer = (state = globalAlertInit, action) => {
  let alertState;
  switch (action.type) {
    case "SET_GLOBAL_ALERT":
      return action.payload;
    case "GLOBAL_ALERT_FAIL":
      alertState = { ...globalAlertFail };
      alertState.message = action.payload;
      return alertState;
    case "GLOBAL_ALERT_SUCCESS":
      alertState = { ...globalAlertSucces };
      alertState.message = action.payload;
      return alertState;

    case "GLOBAL_ALERT_CLOSE":
      let closeState = { ...state };

      closeState.show = false;
      return closeState;
    // return globalAlertInit;

    case "GLOBAL_ALERT_RESET":
      return globalAlertInit;

    default:
      return state;
  }
};

export default globalAlertReducer;
