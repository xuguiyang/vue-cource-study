import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from '../src/lib/index'
import iView from 'iview'


Vue.use(iView)
Vue.config.productionTip = false
//将Bus绑定到vue的 prototype上 可以全局使用
Vue.prototype.$bus=Bus
new Vue({
  router,
  store,
  render: h => h(App)
  // render: h => {
  //   return h('div' ,{
  //     attrs: {
  //       id: 'box'
  //     },
  //     style: {
  //       color: 'hotpink'
  //     },
  //     on: {
  //       click: () => {
  //         console.log("on",1)
  //       }
  //     },
  //     nativeOn: {
  //       'click': () =>{
  //         console.log(1);

  //       }
  //     }
  //   },'完美')
  // }
}).$mount('#app')
