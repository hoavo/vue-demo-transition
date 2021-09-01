import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { beforeRoute, afterRoute } from "./utils/Transitioner";

Vue.config.productionTip = false;
router.beforeResolve((to, from, next) => {
  beforeRoute(to);
  next();
});
router.afterEach(() => {
  afterRoute();
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
