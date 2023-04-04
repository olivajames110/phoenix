const dataTypes = {
  minOneLetter: "minOneLetter",
  minLength: "minLength",
  minOneDigit: "minOneDigit",
  minSpecialChar: "minSpecialChar",
};

export const validatePassword = (password) => {
  let errors = [];

  // Minimum length
  if (password.length < 6) {
    errors.push({
      type: dataTypes.minLength,
      message: "Your password must be at least 8 characters",
    });
  }

  //One letter
  if (password.search(/[a-z]/i) < 0) {
    errors.push({
      type: dataTypes.minOneLetter,
      message: "Your password must contain at least one letter.",
    });
  }

  //One digit
  if (password.search(/[0-9]/) < 0) {
    errors.push({
      type: dataTypes.minOneDigit,
      message: "Your password must contain at least one digit.",
    });
  }

  //Special Character
  if (password.search(/[!#$%&? "]/) < 0) {
    errors.push({
      type: dataTypes.minSpecialChar,
      message: "Your password must contain at least one digit.",
    });
  }

  return errors;
};
