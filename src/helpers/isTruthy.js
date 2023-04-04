export const isTruthy = (val, component) => {
  if (val) {
    return component;
  } else {
    return null;
  }
};
