import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { TreatmentsStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const authModule: Module<TreatmentsStateInterface, StateInterface> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

export default authModule
