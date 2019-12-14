import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Projects from "../views/Projects.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/",
    name: "index",
    component: Index
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
