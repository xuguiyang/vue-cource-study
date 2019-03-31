import Vue from 'vue'
import Router from 'vue-router'
// import {routes} from " ./router";
import routes from './router.js'

Vue.use(Router)

// export default new Router({
//   // 使用路由列表 routes：routes   ES6可以简写成routes
//   // routes：routes
//   // mode:'history',
//   routes
// })
const router = new Router({
  routes
})

//路由守卫
//前置守卫 注册全局前置守卫 to是指即将跳转的路由对象
// from都当前即将离开的路由对象 next是函数 去认定跳转时用next函数

//把是否登录保存在常量里面
const HASH_LOGINED = true

router.beforeEach((to, from, next)=> {
  if (to.name !== 'login') {
    if (HASH_LOGINED) next()
    else next({
      name: 'login'
    })
  } else {
    if (HASH_LOGINED) next({name: 'home'})
    else next()
  }
})

//////////////////****** */不懂   第三节//////////
// router.router.beforeResolve((to, from, next) => {
//   // to and from are both route objects. must call `next`.
// })
// 后置钩 路由跳转之后
 router.afterEach( (to ,from) => {

 })
export default router
