const userTypes = {
  // id: uuidv4(),
  borrower: "borrower",
  admin: "admin",
  ops: "ops",
};

const userTypeReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER_TYPE":
      return action.payload;

    case "SET_USER_TYPE_BORROWER":
      return userTypes.borrower;

    case "SET_USER_TYPE_ADMIN":
      return userTypes.admin;

    case "SET_USER_TYPE_OPS":
      return userTypes.ops;

    case "CLEAR_USER_TYPE":
      return null;

    default:
      return state;
  }
};

export default userTypeReducer;
