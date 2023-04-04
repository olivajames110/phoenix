export const dateIsValid = (string) => {
  return !Number.isNaN(new Date(string).getTime());
};
