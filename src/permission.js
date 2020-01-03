/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */

import router from "./router";
import storage from "./utils/localStorage";
import posts from "./api/mock_index.js";
import store from "./store";

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title || "后台管理模板";

  const hasToken = storage.get("token");
  if (!hasToken) {
    /* has no token */
    if (to.path === "/login") {
      next();
    } else {
      next({ path: "/login" });
    }
  } else {
    if (to.path === "/login") {
      next();
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        next();
      } else {
        try {
          // get user info
          const info = await posts.getUserInfo();
          store.commit("user/changeUserInfo", info);
          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch(
            "permission/generateRoutes",
            info.roles
          );
          // dynamically add accessible routes
          router.addRoutes(accessRoutes);

          // hack method to ensure that adnext({ ...to, replace: true });dRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true });

          // detail see: https://github.com/vuejs/vue-router/issues/2873
          // fixed router.replace / next({ ...to, replace: true }); error => Uncaught (in promise) undefined
          // next(to);
        } catch (error) {
          // remove token and go to login page to re-login
          console.log(error);
          store.dispatch("user/resetUserInfo");
          next({ path: "/login" });
        }
      }
    }
  }
});
