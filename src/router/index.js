import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
import Full from '@/containers/Full'
import Full2 from '@/containers/Full2'

import Buttons from '@/views/components/Buttons'

// Views - Pages
import Page404 from '@/views/errorPages/Page404'
import Page500 from '@/views/errorPages/Page500'


/* login */
const Login = _import('login/index');
Vue.use(Router);

export const constantRouterMap = [
    { path: '/login', component: Login, hidden: true },
    {path: '/pages',redirect: '/pages/p404', name: 'Pages',
          component: {
            render (c) { return c('router-view') }
              // Full,
          },
          children: [{path: '404',  name: 'Page404', component: _import('errorPages/Page404') },
                     {path: '500',name: 'Page500',component: _import('errorPages/Page404')},
                    ]
    }


]

export default new Router({
  mode: 'hash', 
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [

 {
    path: '/',
    redirect: '/dashboard',
    name: '应用数据',
    component: Full,
    hidden:false,
    children: [
     {path: '/dashboard',name: '功能看板',icon:'speedometer',component: _import('Dashboard')},   
      {path: '/table', name: '表格综合实例',icon:'ios-paper',component: _import('Table'),meta: { role: ['admin'] }},
      {path: '/tinymce',name: 'Tinymce编辑器',icon:"android-document",component: _import('Tinymce')},
      {path: '/markdown',name: 'Markdown',icon:"android-list",component: _import('Markdown')},
      
    ]
  },


   {
    path: '/dash1',
    redirect: '/dash1/introduction',
    name: '应用设置',
    component: Full2,
    hidden:false,
    children: [
     {path: '/dash1/dashboard',name: '售前设置',icon:'speedometer',component: _import('Dashboard1')},
     {path: '/dash1/introduction',name: '访问控制',icon:'thumbsup',component: _import('Introduction')},
    
    ]
  },
   {
    path: '/dash2',
    redirect: '/dash2/introduction',
    name: '首页2',
    component: Full2,
    hidden:false,
    children: [
     {path: '/dash2/dashboard',name: '性能监控',icon:'speedometer',component: _import('Dashboard2')},
     {path: '/dash2/introduction',name: '服务器监控',icon:'thumbsup',component: _import('TableDetail')},
     {path: '/dash2/liuliang',name: '流量监控',icon:'thumbsup',component: _import('Table')},
    ]
  },
   {
    path: '/dash3',
    redirect: '/dash3/introduction',
    name: '首页2',
    component: Full2,
    hidden:false,
    children: [
     {path: '/dash3/dashboard',name: '售前金额报表',icon:'speedometer',component: _import('Dashboard3')},
     {path: '/dash3/introduction',name: '流量增长报表',icon:'thumbsup',component: _import('Introduction')},
    
    ]
  },


  { path: '*', redirect: '/pages/404', hidden: true }
  
];
