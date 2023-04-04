export const formatSSN = (value) => {
  if (value === undefined) {
    return;
  }
  let formattedVal = value.replace(/\D/g, "");
  if (formattedVal.length > 9) {
    formattedVal = formattedVal.replace(
      /^(\d\d\d)(\d{2})(\d{0,4}).*/,
      "$1-$2-$3"
    );
    return formattedVal;
  } else if (formattedVal.length > 4) {
    formattedVal = formattedVal.replace(
      /^(\d\d\d)(\d{2})(\d{0,4}).*/,
      "$1-$2-$3"
    );
  } else if (formattedVal.length > 2) {
    formattedVal = formattedVal.replace(/^(\d\d\d)(\d{0,3})/, "$1-$2");
  } else {
    formattedVal = formattedVal.replace(/^(\d*)/, "$1");
  }

  return value !== undefined ? formattedVal : "";
};
