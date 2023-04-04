export const globalAlertSet = (state) => {
  return {
    type: "GLOBAL_SET",
    payload: state,
  };
};

export const globalAlertFail = (data) => {
  return {
    type: "GLOBAL_ALERT_FAIL",
    payload: data,
  };
};

export const globalAlertSuccess = (data) => {
  return {
    type: "GLOBAL_ALERT_SUCCESS",
    payload: data,
  };
};

export const globalAlertClose = () => {
  return {
    type: "GLOBAL_ALERT_CLOSE",
  };
};
export const globalAlertReset = () => {
  return {
    type: "GLOBAL_ALERT_RESET",
  };
};
