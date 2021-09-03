import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { PatientsStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const authModule: Module<PatientsStateInterface, StateInterface> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

export default authModule
