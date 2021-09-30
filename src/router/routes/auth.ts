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
      },
      {
        path: 'user_pass/:token',
        name: 'userPass',
        component: () => import('@/views/auth/user-pass/UserPass.vue')
      }
    ]
  }
]

export default authRoutes
