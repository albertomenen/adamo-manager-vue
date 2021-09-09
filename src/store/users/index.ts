import { Module } from 'vuex'
import { StateInterface } from '..'

import state, { UserStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const userModule: Module<UserStateInterface, StateInterface> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

export default userModule
