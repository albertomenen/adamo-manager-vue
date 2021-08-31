import { GetterTree } from 'vuex'
import { StateInterface } from 'src/store/index'
import { AuthStateInterface } from './state'

const getters: GetterTree<AuthStateInterface, StateInterface> = {
  getUser (state) {
    return state.authenticatedUser
  },

  getUserGroupId (state) {
    return state.authenticatedUser?.id_group
  },

  getToken (state) {
    return state.token
  },

  getLocationId (state) {
    return state.authenticatedUser?.id_location
  }
}

export default getters
