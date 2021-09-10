import { RouteConfig } from 'vue-router'

import AppLayout from '@/layouts/app-layout/AppLayout.vue'
import BlankLayout from '@/layouts/blank-layout/BlankLayout.vue'

const dataRoutes: Array<RouteConfig> = [
  {
    path: '/data',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'users',
        component: BlankLayout,
        children: [
          {
            path: '',
            name: 'dataUsers',
            component: () => import('@/views/data/list/DataList.vue'),
            meta: {
              breadcrumb: [
                {
                  label: ['data.num', 2]
                },
                {
                  label: ['users.num', 2]
                }
              ]
            }
          },
          {
            path: ':userId',
            name: 'dataProfile',
            component: () => import('@/views/data/details/users/DetailsUsers.vue'),
            meta: {
              breadcrumb: [
                {
                  label: ['data.num', 2]
                },
                {
                  label: ['users.num', 2],
                  link: {
                    name: 'dataUsers'
                  }
                },
                {
                  label: 'users.profile'
                }
              ]
            }
          }
        ]
      },
      {
        path: 'devices',
        component: BlankLayout,
        children: [
          {
            path: '',
            name: 'dataDevices',
            component: () => import('@/views/data/list/DataList.vue'),
            meta: {
              breadcrumb: [
                {
                  label: ['data.num', 2]
                },
                {
                  label: ['devices.num', 2]
                }
              ]
            }
          }
        ]
      }
    ]
  }
]

export default dataRoutes
