import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from "../views/Search";
import SignUp from "../views/SignUp";
import Company from "../views/Company";
import Review from "../views/Review";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search/:userInput/:query',
    name: 'search',
    component: Search,
  },
  {
    path: '/company/:companyId',
    name: 'company',
    component: Company
  },
  {
    path: '/review/:companyId',
    name: 'review',
    component: Review
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
