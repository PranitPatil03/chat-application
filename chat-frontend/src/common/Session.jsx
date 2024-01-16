export const StoreSession = (key, value) => {
  return sessionStorage.setItem(key, value);
};

export const LookInSession = (key) => {
  return sessionStorage.getItem(key);
};

export const RemoveSession = (key) => {
  return sessionStorage.removeItem(key);
};
