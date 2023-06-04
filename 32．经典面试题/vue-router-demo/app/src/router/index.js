import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: () => import("../views/Layout.vue"),
    },
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },

    {
      path: "/list",
      name: "List",
      component: () => import("../views/List.vue"),
    },
    {
      path: "/form",
      name: "Form",
      component: () => import("../views/Form.vue"),
    },
  ],
});
