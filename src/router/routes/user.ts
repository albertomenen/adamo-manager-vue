import { RouteConfig } from 'vue-router'

import AppLayout from '@/layouts/app-layout/AppLayout.vue'

const userRoutes: Array<RouteConfig> = [
  {
    path: '/user',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'profile',
        name: 'userProfile',
        component: () => import('@/views/user/profile/Profile.vue'),
        meta: {
          breadcrumb: [
            {
              label: 'userMenu.conf'
            }
          ]
        }
      }
    ]
  }
]

export default userRoutes
