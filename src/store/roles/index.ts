import { Module } from 'vuex'
import { StateInterface } from '..'

import state, { RoleStateInterface } from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const roleModule: Module<RoleStateInterface, StateInterface> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

export default roleModule
