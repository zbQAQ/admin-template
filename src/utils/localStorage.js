export default {
  get(key) {
    return window.localStorage.getItem(key);
  },
  set(key, value) {
    if (typeof value != "string") {
      value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
  },
  remove(key) {
    window.localStorage.removeItem(key);
  },
  reload() {
    window.localStorage.clear();
  }
};
