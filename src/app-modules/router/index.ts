import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/auth/auth.vue'),
    children: [
      {
        path: 'sign-up',
        name: 'Sign up',
        component: () => import(/* webpackChunkName: "sign-up" */ '@/components/auth/sign-up/sign-up.vue')
      },
      {
        path: 'sign-up/confirm',
        name: 'Confirm sign up',
        component: () => import(/* webpackChunkName: "confirm-sign-up" */ '@/components/auth/confirm-sign-up/confirm-sign-up.vue')
      },
      {
        path: 'sign-in',
        name: 'Sign in',
        component: () => import(/* webpackChunkName: "sign-in" */ '@/components/auth/sign-in/sign-in.vue')
      }
    ]
  },
  {
    path: '/content',
    component: () => import(/* webpackChunkName: "content" */ '@/views/content/content.vue'),
    children: [
      {
        path: 'create',
        name: 'Create content',
        component: () => import(/* webpackChunkName: "create-content" */ '@/components/content/create-content/create-content.vue'),
        meta: {
          private: true
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  await store.dispatch('syncAuth');
  const loginRoute: string = '/auth/sign-in';
  const isLoggedIn: boolean = store.getters.isLoggedIn;
  if (to.matched.some((route) => route.meta.private) && !isLoggedIn) {
    next({ path: loginRoute, query: { redirect: to.fullPath } });
  } 
  
  if (to.matched.some((route) => route.path === loginRoute) && isLoggedIn) {
    next({ path: '/' });
  }

  next();
});

export default router
