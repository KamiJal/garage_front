import Vue from 'vue'
import App from './App.vue'
import STORE from './store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: STORE
}).$mount('#app');