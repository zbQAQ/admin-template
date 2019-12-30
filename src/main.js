import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./permission.js";

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "@/styles/index.css"; // global css

Vue.use(Element, { size: "mini" });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
