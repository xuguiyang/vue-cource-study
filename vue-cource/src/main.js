import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from '../src/lib/index'

Vue.config.productionTip = false
//将Bus绑定到vue的 prototype上 可以全局使用
Vue.prototype.$bus=Bus
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
