import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "../layout/index.vue";
import Login from "../views/login.vue";

Vue.use(VueRouter);

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    component: Layout,
    redirect: "/overview",
    children: [
      {
        path: "overview",
        name: "Overview",
        component: () => import("../views/overview.vue")
      },
      {
        path: "about",
        name: "About",
        component: () => import("../views/About.vue")
      }
    ]
  }
];
export const asyncRoutes = [
  {
    path: "/admin",
    component: Layout,
    redirect: "/admin/adminList",
    meta: {
      roles: ["admin"]
    },
    children: [
      {
        path: "adminList",
        name: "AdminList",
        component: () => import("../views/adminList.vue")
      },
      {
        path: "adminEdit",
        name: "AdminEdit",
        component: () => import("../views/adminEdit.vue")
      }
    ]
  },
  {
    path: "/article",
    component: Layout,
    redirect: "/article/list",
    children: [
      {
        path: "list",
        name: "articleList",
        component: () => import("../views/articleList.vue"),
        meta: {
          roles: ["editor"]
        }
      },
      {
        path: "edit",
        name: "articleEdit",
        component: () => import("../views/articleEdit.vue"),
        meta: {
          roles: ["admin", "editor"]
        }
      }
    ]
  }
];

const createRouter = () =>
  new VueRouter({
    // mode: 'history', // require service support
    base: process.env.BASE_URL,
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
