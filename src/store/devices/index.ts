import { Module } from 'vuex'
import { StateInterface } from '..'

import state, { DeviceStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const devicesModule: Module<DeviceStateInterface, StateInterface> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

export default devicesModule
