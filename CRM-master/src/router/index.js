import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/login'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   // redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true },

  {
    path: '/house',
    component: Layout,
    redirect: '/house',
    name: 'house',
    meta: {
      title: '房源管理',
      icon: 'nested'
    },
    children: [
      {
        
        path: '/house/newhouse',
        component: () => import('@/views/house/newhouse'), // Parent router-view
        name: 'newhouse',
        meta: { title: '新房管理' },
        children:[
          
        ]
      }
    ]
  },
  {
    path: '/consult',
    component: Layout,
    redirect: '/consult/consultmanage',
    name: 'consult',
    meta: {
      title: '咨询管理',
      icon: 'table'
    },
    children: [
      {
        path: '/consultmanage',
        component: () => import('@/views/consulting/consultmanage'), // Parent router-view
        name: 'consultmanage',
        meta: { title: '咨询列表' }
      },
      {
        path: '/consultlist',
        component: () => import('@/views/consulting/consultlist'),
        name: 'consultlist',
        meta: { title: '咨询分类' }
      }
    ]
  },

  {
    path: '/system',
    component: Layout,
    redirect: '/system',
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'link'
    },
    children: [
      {
        path: '/system/banner',
        component: () => import('@/views/system/banner'), // Parent router-view
        name: 'banner',
        meta: { title: '轮播管理' },
      },
      {
        path: '/system/flowerdata',
        component: () => import('@/views/system/flowerdata'), // Parent router-view
        name: 'flowerdata',
        meta: { title: '转楼花数据' },
      }
    ]
  },

  {
    path: '/article',
    component: Layout,
    children: [
      {
        path: '/article',
        component: () => import('@/views/article/article'),
        // meta: { title: '创建文章', icon: 'link' }
      }
    ]
  },

  {
    path: '/pics',
    component: Layout,
    children: [
      {
        path: '/pics',
        component: () => import('@/views/pics/pics'),
        // meta: { title: '创建文章', icon: 'link' }
      }
    ]
  },

  {
    path: '/additem',
    component: Layout,
    children: [
      {
        path: '/additem',
        component: () => import('@/views/additem/additem'),
        // meta: { title: '创建文章', icon: 'link' }
      }
    ]
  },

  
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
