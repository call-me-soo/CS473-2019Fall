import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from "../views/Search";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";
import Users from "../views/Users";
import Company from "../views/Company";
import NewReview from "../views/NewReview";

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
    path: '/review/new/company/:companyId',
    name: 'newReview',
    component: NewReview
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
