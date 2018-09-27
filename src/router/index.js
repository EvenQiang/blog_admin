import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/** note: submenu only apppear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path*',
    component: () =>
        import('@/views/redirect/index')
  }]
},
{
  path: '/login',
  component: () =>
      import('@/views/login/index'),
  hidden: true
},
{
  path: '/authredirect',
  component: () =>
      import('@/views/login/authredirect'),
  hidden: true
},
{
  path: '/404',
  component: () =>
      import('@/views/errorPage/404'),
  hidden: true
},
{
  path: '/401',
  component: () =>
      import('@/views/errorPage/401'),
  hidden: true
},
{
  path: '',
  component: Layout,
  redirect: 'dashboard',
  children: [{
    path: 'dashboard',
    component: () =>
        import('@/views/dashboard/index'),
    name: 'Dashboard',
    meta: {
      title: 'dashboard',
      icon: 'dashboard',
      noCache: true
    }
  }]
}
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

export const asyncRouterMap = [{
  path: '/article',
  component: Layout,
  redirect: '/article/list',
  name: 'Example',
  meta: {
    title: 'blog',
    icon: 'example'
  },
  children: [{
    path: 'create',
    component: () =>
          import('@/views/blog/create'),
    name: 'CreateArticle',
    meta: {
      title: 'createArticle',
      icon: 'edit'
    }
  },
  {
    path: 'edit/:id(\\d+)',
    component: () =>
          import('@/views/blog/edit'),
    name: 'EditArticle',
    meta: {
      title: 'editArticle',
      noCache: true
    },
    hidden: true
  },
  {
    path: 'list',
    component: () =>
          import('@/views/blog/list'),
    name: 'ArticleList',
    meta: {
      title: 'articleList',
      icon: 'list'
    }
  }
  ]
},
{
  path: '/pi',
  component: Layout,
  redirect: '/pi/list',
  name: 'RaspberryPi',
  meta: {
    title: 'raspberryPi',
    icon: 'example'
  },
  children: [{
    path: 'create',
    component: () =>
          import('@/views/raspberryPi/create'),
    name: 'CreateArticle',
    meta: {
      title: 'createArticle',
      icon: 'edit'
    }
  },
  {
    path: 'edit/:id(\\d+)',
    component: () =>
          import('@/views/raspberryPi/edit'),
    name: 'EditArticle',
    meta: {
      title: 'editArticle',
      noCache: true
    },
    hidden: true
  },
  {
    path: 'list',
    component: () =>
          import('@/views/raspberryPi/list'),
    name: 'ArticleList',
    meta: {
      title: 'articleList',
      icon: 'list'
    }
  }
  ]
},
{
  path: '*',
  redirect: '/404',
  hidden: true
}
]
