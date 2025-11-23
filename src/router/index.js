import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Home.vue";
import Usuarios from "../pages/Index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
  },
  {
    path: "/index",
    name: "Index",
    component: Usuarios,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
