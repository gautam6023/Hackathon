export const loadData = (key) => {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);

    return data;
  } catch (e) {
    return undefined;
  }
};

export const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const deleteData = (key) => {
  localStorage.removeItem(key);
};
