import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Index from "../pages/Index.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "index",
    component: Index,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
