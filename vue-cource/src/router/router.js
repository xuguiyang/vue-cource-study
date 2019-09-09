//路由列表
import Home from '@/views/Home'
// import About from '@/views/About'
// import child from "../views/child.vue"
// import email from "../views/email.vue"
// import tel from "../views/tel.vue"
//向外导出

export default [{
    path: '/',
    name: 'home',
    alias: '/home_page',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      // if (from.name === 'about') alert('这是从about页面来的')
      // else alert('这不是从about也来的')
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  // {
  //   path: '/directive',
  //   name: 'directive',
  //   component: () => import('../views/directive.vue'),
  // },
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
    props: {
      food: 'banana'
    },
    meta: {
      title:'关于'
     }
  },
  // {
  //   path: '/modalbox',
  //   name: 'modalbox',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // 路由懒加载中我们要用到异步组件浏览器中看到懒加载的效果了，即只有当路由匹配成功时，才会加载相应的组件，而且加载一次后会将它缓存，下次再访问这个路由，不会重新加载。
  //   component: () => import( /* webpackChunkName: "about" */ '@/views/Modalbox.vue'),
  //   //不用webpack懒加载这样写 并且需要在上方import导入模块
  //   // component:About
  //   // props: {
  //   //   food: 'banana'
  //   // },
  //   meta: {
  //     title:'模态框'
  //    }
  // },
  // 动态路由
  {
    path: '/game',
    name: 'game',
    component: () => import('@/views/game'),
    props: true

  },
  {
    path: '/argu/:name',
    component: () => import('@/views/argu'),
    props: true

  },
  //嵌套路由
  {
    path: '/parent',
    name: 'parent',
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
    path: '/main',
    // redirect:'/'
    // redirect:{
    //   name:'home'
    // }
    redirect: to => {
      // console.log(to);
      // return{
      //   name:'home'
      // }
      return '/'
    }
  },
  {
    path:'/render_page',
    name:'render_page',
    component:()=>import('../views/render-page.vue')
  },
  {
    path:'/scroll',
    name:'scroll',
    component:()=>import('../views/scroll.vue')
  },
  {
    path:'/shopcar',
    name:'shopcar',
    component:()=>import('../views/shopcar.vue')
  },
  {
    path:'/fuzhi',
    name:'fuzhi',
    component:()=>import('../views/fuzhi.vue')
  },

  // {
  //   path:'/crontab_list',
  //   name:'crontab_list',
  //   component:()=>import('../views/crontab-list.vue')
  // },
  // {
  //   path:'/tables',
  //   name:'tables',
  //   component:()=>import('../views/tables.vue')
  // },
  {
    path: '/count-to',
    name: 'count_to',
    meta: {
      title: 'count_to'
    },
    component: () => import('@/views/count-to.vue')
  },
  {
    path:'/store',
    name: 'store',
    component:()=>import('../views/store.vue')
  },
  {
    path:'/render_page',
    name:'render_page',
    component:()=>import('../views/render-page.vue')
  },
  {
    //优先级原则 所以此组件要定义在最后
    //匹配任何路径
    path: '*',
    component: () => import(
      '@/views/error-404.vue'
    ),
    props: true,

  },
]
