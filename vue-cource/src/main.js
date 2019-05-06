import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Bus from './lib/bus'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import CountTo from '_c/count-to'
// import '@/assets/font/iconfont.js'
// import '@/assets/font/iconfont.css'
// import IconFont from '_c/icon-font'
// import IconSvg from '_c/icon-svg'
if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
// Vue.prototype.$bus = Bus
// Vue.component('icon-font', IconFont)
// Vue.component('icon-svg', IconSvg)
Vue.use(iview)

// const handleClick = event => {
//   console.log(event)
//   event.stopPropagation()
// }


new Vue({
  router,
  store,
  // render: h => {
  //   return h('div',[
  //      h(CountTo, {
  //       'class': [],
  //       attrs: {},
  //       style: {
  //         'font-size': '40px',
  //       },
  //       props: {
  //         endVal: 100
  //       },
  //       // domProps: {
  //       //   innerHTML: '123'
  //       // },
  //       on: {
  //         'on-animation-end': (val) => {
  //           console.log('animation end!')
  //         },
  //         'click': () => {
  //           console.log(click)
  //         }
  //       },
  //       nativeOn: {
  //         'click': () => {
  //           console.log('nativeOn click!')
  //         }
  //       },
  //       directives: [],
  //       scopedSlots: {},
  //       slot: '',
  //       key: '',
  //       ref: ''
  //     })
  //   ])
  // }


  // render: h => h('div', [
  //   h('ul', {
  //     on: {
  //       'click': handleClick
  //     }
  //   }, getLiEleArr(h))
  // ])

  
  render: h => h(App)
}).$mount('#app')
