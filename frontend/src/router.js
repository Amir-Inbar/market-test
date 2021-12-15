import Vue from 'vue'
import Router from 'vue-router'
import appInterview from '../src/views/app-interview.vue'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: appInterview
    }
  ]
})
