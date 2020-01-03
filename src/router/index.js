import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "../layout/index.vue";
import Login from "../views/login.vue";

Vue.use(VueRouter);

/**
 * router options details
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show root menu, even if only has one child
 *                                if set false(defalut false), it will be not show root menu, just show it one child,
 *                                this attributes used to handle just has on child with routes
 *
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta: {
 *    roles: ['admin','editor']   control the page roles (you can set multiple roles)
 *    tabTitle: "title"           the name show in Browser tab
 *    sideTitle: "title"          the name show in sidebar and breadcrumb (recommend set)
 *    icon: "el-icon-menu"        set sideBar Icon (not recommend set in child node)
 * }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    name: "Login",
    hidden: true,
    component: Login,
    meta: {
      tabTitle: "登录"
    }
  },
  {
    path: "/",
    component: Layout,
    redirect: "/overview",
    children: [
      {
        path: "overview",
        name: "Overview",
        component: () => import("../views/overview.vue"),
        meta: {
          sideTitle: "首页",
          icon: "el-icon-s-home"
        }
      }
    ]
  },
  {
    path: "/about",
    component: Layout,
    redirect: "/about/index",
    children: [
      {
        path: "index",
        name: "About",
        component: () => import("../views/About.vue"),
        meta: {
          sideTitle: "关于",
          icon: "el-icon-menu"
        }
      }
    ]
  }
];
export const asyncRoutes = [
  {
    path: "/admin",
    component: Layout,
    redirect: "/admin/adminList",
    alwaysShow: true, // will always show the root menu
    meta: {
      roles: ["admin"],
      icon: "el-icon-star-on",
      sideTitle: "管理员"
    },
    children: [
      {
        path: "adminList",
        name: "AdminList",
        component: () => import("../views/adminList.vue"),
        meta: {
          sideTitle: "管理员列表"
        }
      },
      {
        path: "adminEdit",
        name: "AdminEdit",
        component: () => import("../views/adminEdit.vue"),
        meta: {
          sideTitle: "管理员编辑页"
        }
      }
    ]
  },
  {
    path: "/article",
    component: Layout,
    redirect: "/article/list",
    alwaysShow: true, // will always show the root menu
    meta: {
      sideTitle: "文章管理",
      icon: "el-icon-notebook-2"
    },
    children: [
      {
        path: "list",
        name: "articleList",
        component: () => import("../views/articleList.vue"),
        meta: {
          roles: ["editor"],
          sideTitle: "文章列表"
        }
      },
      {
        path: "edit",
        name: "articleEdit",
        component: () => import("../views/articleEdit.vue"),
        meta: {
          roles: ["admin", "editor"],
          sideTitle: "文章编辑"
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
