import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
//import store from "@/store/index";

Vue.use(VueRouter);

const routes = [

  {
    path: "/home",
    alias: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;
