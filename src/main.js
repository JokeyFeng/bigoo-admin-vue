import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'


import App from './App'
import router from './router'


Vue.use(ElementUI, {locale});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
