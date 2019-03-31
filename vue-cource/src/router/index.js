import Vue from 'vue'
import Router from 'vue-router'
// import {routes} from " ./router";
import routes from './router.js'

Vue.use(Router)

export default new Router({
  // 使用路由列表 routes：routes   ES6可以简写成routes
  // routes：routes
  routes
})
