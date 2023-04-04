const formIsValid = (state = true, action) => {
  switch (action.type) {
    case "SET_FORM_IS_VALID":
      return action.payload;

    default:
      return state;
  }
};

export default formIsValid;
