// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueCountUp from 'vue-countupjs'
import VueAwesomeSwiper from "vue-awesome-swiper/src";
import store from './vuex/store.js'


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueCountUp,
  store,
  VueAwesomeSwiper,
  components: { App },
  template: '<App/>'
});
