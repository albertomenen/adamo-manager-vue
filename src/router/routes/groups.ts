import { RouteConfig } from 'vue-router'

import AppLayout from '@/layouts/app-layout/AppLayout.vue'

const groupRoutes: Array<RouteConfig> = [
  {
    path: '/',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'groupsList',
        component: () => import('@/views/groups/list/GroupsList.vue'),
        meta: {
          breadcrumb: [
            {
              label: ['groups.num', 2]
            }
          ]
        }
      }
    ]
  }
]

export default groupRoutes
