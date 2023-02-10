import { createRouter, createWebHistory } from "vue-router";
import TrackList from "../views/TrackList.vue";
import AddTrack from "../views/AddTrack.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TrackList,
    },
    {
      path: "/tracks/add",
      name: "addtrack",
      component: AddTrack,
    },
  ],
});

export default router;
