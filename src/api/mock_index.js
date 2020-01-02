/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
export default {
  login() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          token: Date.now()
        });
      }, 1000);
    });
  },
  getUserInfo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          name: "username",
          createTime: "2020.02.02",
          roles: ["editor"]
        });
      }, 1000);
    });
  }
};
