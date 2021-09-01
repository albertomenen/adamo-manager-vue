import { RouteConfig } from 'vue-router'

import AppLayout from '@/layouts/app-layout/AppLayout.vue'

const spaceRoutes: Array<RouteConfig> = [
  {
    path: '/',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'spacesList',
        component: () => import('@/views/spaces/list/SpacesList.vue'),
        meta: {
          breadcrumb: [
            {
              label: ['spaces.num', 2]
            }
          ]
        }
      }
    ]
  }
]

export default spaceRoutes
