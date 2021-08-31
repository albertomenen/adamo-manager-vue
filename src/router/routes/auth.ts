import { RouteConfig } from 'vue-router'

import AuthLayout from '@/layouts/auth-layout/auth-layout.vue'

const authRoutes: Array<RouteConfig> = [
  {
    path: '/auth',
    name: 'auth',
    redirect: { name: 'login' },
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/auth/login/Login.vue')
      }
    ]
  }
]

export default authRoutes
