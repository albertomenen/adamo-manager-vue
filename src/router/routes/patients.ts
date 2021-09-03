import { RouteConfig } from 'vue-router'

import AppLayout from '@/layouts/app-layout/AppLayout.vue'

const patientsRoute: Array<RouteConfig> = [
  {
    path: '/patients',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'patientsList',
        component: () => import('@/views/patients/list/PatientsList.vue'),
        meta: {
          breadcrumb: [
            {
              label: ['patients.num', 2]
            }
          ]
        }
      },
      {
        path: ':patientId',
        name: 'patientDetails',
        component: () => import('@/views/patients/details/PatientDetails.vue'),
        meta: {
          breadcrumb: [
            {
              label: ['patients.num', 2],
              link: {
                name: 'patientsList'
              }
            },
            {
              label: ['treatments.num', 2]
            }
          ]
        }
      }
    ]
  }
]

export default patientsRoute
