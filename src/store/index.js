import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account
  }

  /* state: {
     order: {
       counter: 1,
       downMenu: 1,
       radios: 1
     },
     totalPrice: 0
   },
   mutations: {
     updateOrder(state, data) {
       state.order[data[0]] = data[1];
     },
     updateTotalPrice(state, price) {
       state.totalPrice = price;
     }
   },
   actions: {
     updateOrder(context, data) {
       context.commit('updateOrder', data);
     },
     updateTotalPrice(context, price) {
       context.commit('updateTotalPrice', price);
     }
   },
   getters: {
     getOrder(state) {
       return state.order ? state.order : {};
     },
     getTotalPrice(state) {
       return state.totalPrice > 0 ? '￥' + state.totalPrice : 0;
     }
   }*/
})
