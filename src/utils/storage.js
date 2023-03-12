const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = SECOND_IN_MS * 60;
const HOUR_IN_MS = MINUTE_IN_MS * 60;

export const setLocalStorage = (key, data) => {
  const currentDate = new Date();

  const apiResponse = {
    data,
    expireDate: currentDate.getTime() + HOUR_IN_MS,
  };
  localStorage.setItem(key, JSON.stringify(apiResponse));
};

export const getLocalStorage = (key) => {
  const storedValue = localStorage.getItem(key);
  if (!storedValue) {
    return null;
  }
  const currentDate = new Date();
  const obj = JSON.parse(storedValue);
  console.log(obj);
  if (obj.expireDate < currentDate.getTime()) {
    return null;
  }
  return obj.data;
};
