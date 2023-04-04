export const mapObjectFormData = (data) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  return formData;
};

export const mapNestedObjectFormData = (data) => {
  const formData = new FormData();
  const obj = {};
  for (const [key, value] of Object.entries(data)) {
    obj[key] = value;
  }
  if (data.hasOwnProperty("documents")) {
    for (const value of data.documents) {
      formData.append(value.id, value.file);
    }
  }
  formData.append("data", JSON.stringify(obj));

  return formData;
};
