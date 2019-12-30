import axios from "axios";
import { Message } from "element-ui";
import storage from "@/utils/localStorage";

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers["token"] = storage.get("token") || null;
    return config;
  },
  error => {
    // console.log(error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.resolve(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;

    /**
     * 在这里要判断 res.code 状态码 做对应处理
     *
     * 401 登录过期 resetToken 并返回login page
     *
     */

    return res;
  },
  error => {
    // console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.resolve(error);
  }
);

export default service;
