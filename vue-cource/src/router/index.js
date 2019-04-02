import Vue from 'vue'
import Router from 'vue-router'
// import {routes} from " ./router";
import routes from './router.js'
import { setTitle } from '@/lib/util'


Vue.use(Router)

// export default new Router({
//   // 使用路由列表 routes：routes   ES6可以简写成routes
//   // routes：routes
//   // mode:'history',
//   routes
// })
const router = new Router({
  routes,

})

//路由守卫
//前置守卫 注册全局前置守卫 to是指即将跳转的路由对象
// from都当前即将离开的路由对象 next是函数 去认定跳转时用next函数

//把是否登录保存在常量里面
const HASH_LOGINED = true

router.beforeEach((to, from, next) => {

  to.meta && setTitle(to.meta.title)

  if (to.meta)
    if (to.name !== 'login') {
      if (HASH_LOGINED) next()
      else next({
        name: 'login'
      })
    } else {
      if (HASH_LOGINED) next({
        name: 'home'
      })
      else next()
    }
})

//////////////////****** */不懂   第三节//////////
//导航呗确认之前 所有组件路由守卫和异步组件被调用之后被调用
// router.beforeResolve((to, from, next) => {
//   // to and from are both route objects. must call `next`.
// })
// 后置钩子 路由跳转之后进行操作
router.afterEach((to, from) => {
  //longing=false
})

/*********************************************************** 
 * 导航接续流程
 * 1.导航被触发
 * 2.在失活的组件（即将离开的页面组件）里面调用离开守卫 beforeRouteLeave
 * 3.调用全局前置守卫 beforeEach
 * 4.在重用的组件里面调用 beforeRouteUpdate
 * 5.调用路由独享的守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8.调用全局解析守卫 beforeResolve
 * 9.导航被确认
 * 10.调用全局的解析守卫 afterEach
 * 11.出发DOM更新
 * 12.用创建好的实例调用beforeRouteEnter守卫里面传给next()回调函数
 ****************************************************************/
export default router
