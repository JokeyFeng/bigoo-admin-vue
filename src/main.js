import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import {Message, MessageBox} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import Axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/dist/css/swiper.css'
import store from './store'
import VueApexCharts from 'vue-apexcharts'


Vue.use(VueApexCharts);
Vue.use(VueAwesomeSwiper);
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://127.0.0.1:9999';
Axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
Axios.defaults.timeout = 15000;//请求超时时间
Vue.use(ElementUI, {locale});
Vue.component('apexChart', VueApexCharts);
Vue.config.productionTip = false;

//添加请求拦截器
Axios.interceptors.request.use(function (config) {
  if (config.method !== 'OPTIONS' && !config.url.endsWith("/login")) {
    config.headers.Authorization = localStorage.getItem("user_token");
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

//添加响应拦截器
Axios.interceptors.response.use(function (response) {
  let data = response.data;
  if (data.code !== 200) {
    Message({
      message: data.message,
      type: 'error',
      duration: 3 * 1000
    });

    // 401:未登录;
    if (data.code === 401 || data.code === 403) {
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('LogOut').then(() => {
          // 为了重新实例化vue-router对象 避免bug
          location.reload()
        })
      })
    }
    return Promise.reject('error')
  }
  return data;
}, function (error) {
  //对响应错误做些处理
  if (error.response) {
    let errorMessage = error.response.data === null ? '系统内部异常，请联系站点管理员' : error.response.data.message;
    switch (error.response.status) {
      case 404:
        Message({
          message: '很抱歉，资源未找到',
          type: 'error',
          duration: 3 * 1000
        });
        break;
      case 403:
      case 401:
        Message({
          message: '很抱歉，您无法访问该资源',
          type: 'warning',
          duration: 3 * 1000
        });
        break;
      default:
        Message({
          message: errorMessage,
          type: 'error',
          duration: 3 * 1000
        });
        break
    }
  }
  return Promise.reject(error);
});

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
