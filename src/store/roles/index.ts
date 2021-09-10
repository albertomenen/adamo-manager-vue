import { Module } from 'vuex'
import { StateInterface } from '..'

import state, { RoleStateInterface } from './state'
import actions from './actions'

const roleModule: Module<RoleStateInterface, StateInterface> = {
  namespaced: true,
  state,
  actions
}

export default roleModule
