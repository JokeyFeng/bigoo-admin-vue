import Vue from 'vue'
import Router from 'vue-router'
import Register from '../views/login/Register'
import LoginView from '../views/login/Common'
//import LoginView from '../views/login/Login'
import HomePage from '../views/HomePage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: LoginView
    },
    {
      path: '/register',
      name: '账号注册页',
      component: Register
    },
    {
      path: '/homePage',
      name: '首页',
      component: HomePage,
      children: []
    }
  ]
})
