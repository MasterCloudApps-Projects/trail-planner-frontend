import { createRouter, createWebHistory } from "vue-router";
import TrailList from "../views/TrailList.vue";
import AddTrail from "../views/AddTrail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TrailList,
    },
    {
      path: "/trails/add",
      name: "addtrail",
      component: AddTrail,
    },
  ],
});

export default router;
