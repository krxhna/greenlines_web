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
import landing from '../views/landing.vue'
import signup from '../views/signup.vue'
import signin from '../views/signin.vue'
import firebase from '../firebase.js'
import macro from '../views/macro.vue'
import blog from '../views/blog.vue'
import alpha from '../views/alpha.vue'
import funds from '../views/funds.vue'




// import { StripeCheckout } from '@vue-stripe/vue-stripe'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

    meta: {
      requiresAuth: true
    }
    

  },
  {
    path: '/landing',
    name: 'landing',
    component: landing
    
  },
  {
    path: '/funds',
    name: 'funds',
    component: funds

  },

  {
    path: '/alpha',
    name: 'alpha',
    component: alpha
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog
  },
  {
    path: '/macro/:ticker',
    name: 'macro',
    component: macro,
    props: true,
    meta: {
      requiresAuth: true
    },

  },


  {
    path: '/signin',
    name: 'signin',
    component: signin
  },
{
  path: '/signup',
  name: 'signup',
  component: signup
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

    
    meta: {
      requiresAuth: true
    }
  
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
    meta: {
      requiresAuth: true
    },
  
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

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){
    next('alpha');
  }else{
    next(
      
    );
  }
})




export default router
