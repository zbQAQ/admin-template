import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "../layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/overview",
    children: [
      {
        path: "overview",
        name: "overview",
        component: () => import("../views/overview.vue")
      },
      {
        path: "about",
        name: "about",
        component: () => import("../views/About.vue")
      }
    ]
  }
];

const router = new VueRouter({
  // mode: "history", // require service support
  base: process.env.BASE_URL,
  routes
});

export default router;
