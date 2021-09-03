/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */

import { mockImports } from '@/utils/testHelpers'
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'
import Vuex from 'vuex'
import PatientDetails from './PatientDetails.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const factory = (data: any): Wrapper<PatientDetails & { [key: string]: any }> => shallowMount(PatientDetails, {
  localVue,
  store: new Vuex.Store({
    modules: {
      patients: {
        namespaced: true,
        actions: data.actions,
        mutations: data.mutations,
        getters: data.getters
      }
    }
  }),
  stubs: ['BButton', 'BTabs', 'BTabItem', 'PatientHistory', 'PatientInfo', 'BLoading'],
  mocks: {
    $t: (key: string) => (key),
    $tc: (key: string) => (key),
    $router: { push: () => null }
  }
})


describe('PatientDetails.vue', () => {

  let data: any

  mockImports([
    '@/views/patients/history/PatientHistory.vue',
    '@/views/patients/info/PatientInfo.vue'
  ])

  beforeEach(() => {
    data = {
      actions: {
        action_getPatient: jest.fn(() => ({
          name: 'foo'
        }))
      },
      mutations: {
        setPatientEditContext: () => null
      },
      getters: {
        getPatientEditContext: () => false
      }
    }
  })

  test('renderiza correctamente', () => {
    const wrapper = factory(data)
    expect(wrapper.vm).toBeTruthy()
  })


})
