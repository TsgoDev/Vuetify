import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";
import Cards from "../pages/Cards.vue";
import Usuarios from "../pages/Usuarios.vue";

const routes = [
    {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: Usuarios,
  },
    {
    path: "/cards",
    name: "Cards",
    component: Cards,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
