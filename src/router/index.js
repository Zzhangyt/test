import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Index from '@/pages/content/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
