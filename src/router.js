import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/place',
      name: 'place',
      component: () => import('./views/Place.vue')
    },
    {
      path: '/orders/:id',
      name: 'orders-show',
      component: () => import('./views/Order.vue')
    }
  ]
})
