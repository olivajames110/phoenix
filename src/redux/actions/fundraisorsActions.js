export const setFundraisors = (state) => {
  return {
    type: "SET_FUNDRAISORS_STATE",
    payload: state,
  };
};

export const updateFundraisors = (data) => {
  return {
    type: "UPDATE_FUNDRAISORS_STATE",
    payload: data,
  };
};

export const addFundraisors = (data) => {
  return {
    type: "ADD_FUNDRAISORS",
    payload: data,
  };
};

export const clearFundraisors = () => {
  return {
    type: "CLEAR_FUNDRAISORS_STATE",
  };
};
