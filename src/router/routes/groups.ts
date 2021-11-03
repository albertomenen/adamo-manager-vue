import { RouteConfig } from 'vue-router'

import AppLayout from '@/layouts/app-layout/AppLayout.vue'

const groupRoutes: Array<RouteConfig> = [
  {
    path: '/groups',
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
      },
      {
        path: ':groupId',
        name: 'groupDetail',
        component: () => import('@/views/groups/details/GroupDetails.vue'),
        meta: {
          breadcrumb: [
            {
              label: ['groups.num', 2],
              link: {
                name: 'groupsList'
              }
            },
            {
              label: ['groups.num', 1]
            }
          ]
        }

      },
      {
        path: ':groupId/location/:locationId',
        name: 'locationDetails',
        component: () => import('@/views/locations/details/LocationDetails.vue'),
        meta: {
          breadcrumb: [
            {
              label: ['groups.num', 2],
              link: {
                name: 'groupsList'
              }
            },
            {
              label: ['groups.num', 1]
            },
            {
              label: ['locations.num', 1]
            }
          ]
        }
      }
    ]
  }
]

export default groupRoutes
