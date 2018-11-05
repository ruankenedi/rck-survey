export function setItem(key, obj) {
  window.localStorage.setItem(key, JSON.stringify(obj));
}

export function getItem(key) {
  const string = window.localStorage.getItem(key);
  return JSON.parse(string);
}

export function removeItem(key) {
  window.localStorage.removeItem(key);
}
