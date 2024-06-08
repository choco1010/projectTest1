import { createRouter, createWebHistory } from "vue-router";
import AdminDefault from '../layout/AdminDefault.vue'

// path → component
const routes = [
  { 
    path: '/adminLogin',
    component: () => import('@/view/AdminLogin.vue'),
    meta: {
      title: '管理者登入',
      requiredLogin: false
    }
  },
  {
    path: '/',
    component: AdminDefault,
    children: [
      // {
      //   path: '',
      //   component: () => import('@/view/AdminHome.vue'),
      //   meta: {
      //     title: '後台首頁',
      //     requiredLogin: false
      //   }
      // },
      {
        path: '/adminAccount',
        component: () => import('@/view/AdminAccount.vue'),
        meta: {
          title: '管理者專區',
          requiredLogin: false
        }
      },
    ]
  },
]
// 建立 router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // vite 設定檔中的 base: /tid101/g1/
  routes: routes
});

// 匯出 router
export default router;