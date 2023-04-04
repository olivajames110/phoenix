export const setToken = (objectName, data) => {
  console.log("Setting local storage item");
  localStorage.setItem(objectName, JSON.stringify(data));
};
