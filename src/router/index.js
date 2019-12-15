import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Projects from "../views/Projects.vue";
import ProjectsOne from "../views/ProjectsOne.vue";
import New from "../views/New.vue";
import store from '../store';
Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
  if (store.state.Auth.auth) {
    next()
    return
  }
  next('/')
}


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
    path: "/projects/:id",
    component: ProjectsOne
  },
  {
    path: "/new",
    component: New,
    beforeEnter: ifAuthenticated,

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
