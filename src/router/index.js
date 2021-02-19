import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Model from "../views/Model.vue";
import Nexttick from "../views/Nexttick.vue";
import Parent from "../views/slots/Parent.vue";
import Child from "../views/slots/Child.vue";
import Big from "../views/comkeep/Big.vue";
import Vuex from "../views/Vuex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // 路由
  {
    path: "/vuex",
    name: "Vuex",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "vuex" */ "../views/Vuex.vue"),
  },
  {
    path: "/big",
    name: "Big",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "big" */ "../views/comkeep/Big.vue"),
  },
  {
    path: "/child",
    name: "Child",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "child" */ "../views/slots/Child.vue"),
  },
  {
    path: "/parent",
    name: "Parent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "parent" */ "../views/slots/Parent.vue"),
  },

  {
    path: "/nexttick",
    name: "Nexttick",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "nexttick" */ "../views/Nexttick.vue"),
  },
  {
    path: "/model",
    name: "Model",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "model" */ "../views/Model.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
