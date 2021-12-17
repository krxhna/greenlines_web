import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import results from '../views/results.vue'
import results_new from '../views/results_new.vue'
import checkout from '../views/checkout.vue'
import test from '../views/test.vue'
import go from '../views/go.vue'
// import { StripeCheckout } from '@vue-stripe/vue-stripe'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/results/:ticker',
    name: 'results',
    component: results,
    props: true,
  
  },
  {
    path: '/results_new/:ticker',
    name: 'results_new',
    component: results_new,
    props: true,
  
  },
  {
    path: '/checkout',
    name: 'chcekout',
    component: checkout,
    props: true,
  
  },
  {
    path: '/test',
    name: 'test',
    component: test,
    // props: true,
  
  },
  {
    path: '/go',
    name: 'go',
    component: go,
    // props: true,
  
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router
