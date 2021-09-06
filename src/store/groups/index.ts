import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { GroupsStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const spacesModule: Module<GroupsStateInterface, StateInterface> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

export default spacesModule
