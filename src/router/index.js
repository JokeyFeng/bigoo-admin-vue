import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/Login'
import HomePage from '../views/HomePage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录页',
      component: Login
    },
    {
      path: '/homePage',
      name: '首页',
      component: HomePage,
      children: [
      ]
    }
  ]
})
