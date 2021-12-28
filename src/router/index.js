import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import results from '../views/results.vue'
import results_new from '../views/indsutrym.vue'
import checkout from '../views/checkout.vue'
import test from '../views/test.vue'
import go from '../views/go.vue'
import book from '../views/book.vue'
import dashboard from '../views/dashboard.vue'
import industry from '../views/industry.vue'

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
    path: '/industrym/:ticker',
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
    path: '/test/:ticker',
    name: 'test',
    component: test,
    props: true,
  
  },
  {
    path: '/go/:ticker',
    name: 'go',
    component: go,
    props: true,
    // props: true,
  
  },
  {
    path: '/book/:ticker',
    name: 'book',
    component: book,
  
    props: true,
  
  },
  {
    path: '/dashboard/:ticker',
    name: 'dashboard',
    component: dashboard,
  
    props: true,
  
  },
  {
    path: '/industry/:ticker',
    name: 'insdustry',
    component: industry,
  
    props: true,
  
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
