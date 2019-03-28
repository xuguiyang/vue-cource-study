//路由列表

import Home from '@/views/Home'
// import About from '@/views/About'
import child from "../views/child.vue"
import email from "../views/email.vue"
import tel from "../views/tel.vue"

//向外导出
export default [{
    path: '/',
    name: 'home',
    alias:'/home_page',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 路由懒加载中我们要用到异步组件浏览器中看到懒加载的效果了，即只有当路由匹配成功时，才会加载相应的组件，而且加载一次后会将它缓存，下次再访问这个路由，不会重新加载。
    component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue'),
    //不用webpack懒加载这样写 并且需要在上方import导入模块
    // component:About
  },
  // 动态路由
  {
    path: '/argu/:name',
    component: () => import('@/views/argu.vue')
  },
  //嵌套路由
  {
    path: '/parent',
    component: () => import('@/views/parent'),
    children: [{
      path: 'child',
      component: () => import("@/views/child.vue")
    }]
  },
  //嵌套视图
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue'),

      // default,
      // email,
      // tel
    }
  },
  //重定向
  {
    path:'/main',
    // redirect:'/'
    // redirect:{
    //   name:'home'
    // }
    redirect:to=>{
      // console.log(to);
      // return{
      //   name:'home'
      // }
      return '/'
    }
  },

]
