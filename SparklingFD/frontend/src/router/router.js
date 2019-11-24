import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from "../views/Search";
import Signup from "../views/Signup";
import Company from "../views/Company";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/company',
    name: 'company',
    component: Company
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
