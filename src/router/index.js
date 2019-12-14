import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Projects from "../views/Projects.vue";
import New from "../views/New.vue";
Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    component: Index
  },
  {
    path: "/projects",
    component: Projects
  },
  {
    path: "/new",
    component: New
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
