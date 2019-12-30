import router from "./router";
// import storage from "@/plugins/localStorage";
// import store from "./store";

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title || "后台管理模板";

  //确定用户是否登录
  // const hasToken = storage.get('token')

  // if(hasToken) {
  //   if(to.path === '/login') {
  //     next()
  //   }else {

  //     const hasRoles =
  //     if() {}
  //   }

  // }else {
  //   /* no token */

  //   next('/login')

  // }

  next();
});
