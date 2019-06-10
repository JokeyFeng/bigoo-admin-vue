import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      hidden: true
    },
    {path: '/404', component: () => import('@/views/404'), hidden: true},

  ]
})
