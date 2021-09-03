import { RouteConfig } from 'vue-router'

import AppLayout from '@/layouts/app-layout/AppLayout.vue'

const treatmentsRoute: Array<RouteConfig> = [
  {
    path: '/patients/:patientId/treatments',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: ':treatmentId',
        name: 'treatmentDetails',
        component: () => import('@/views/treatments/details/TreatmentDetails.vue'),
        meta: {
          breadcrumb: [
            {
              label: ['patients.num', 2],
              link: {
                name: 'patientsList'
              }
            },
            {
              label: ['treatments.num', 2],
              link: {
                name: 'patientDetails',
                params: [
                  'patientId'
                ]
              }
            },
            {
              label: 'treatments.historical'
            }
          ]
        }
      }
    ]
  }
]

export default treatmentsRoute
