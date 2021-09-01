import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("../views/Home"),
    },
    {
      name: "about",
      path: "/about",
      component: () => import("../views/About"),
    },
  ],
});
