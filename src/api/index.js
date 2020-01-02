/* eslint-disable no-debugger */
/* eslint-disable no-console */
/**
 * 接口调用可以分模块写 再导入
 *
 * 例如:
 * import model1 from './model/user'
 * import model2 from './model/user'
 *
 * posts = {
 *
 *  other code...
 *
 *  ...model1,
 *  ...model2,
 * }
 *
 */
import request from "@/utils/request";
import { url } from "./url";
export default {
  async login(data) {
    try {
      let res = await request({
        url: url + "/login",
        method: "post",
        data
      });
      console.log("login res:", res);
      debugger;
      if (res.errCode === 200 && res.success === true) {
        return res.data;
      }
      return null;
    } catch {
      return null;
    }
  }
};
