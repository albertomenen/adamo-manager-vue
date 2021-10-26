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
  },

  hasPermission: (state) => (permission: string) => {
    return state.authenticatedUser?.role![permission] === true
  },

  getDashboardRouteName (state) {
    switch (state.authenticatedUser?.role.role_code) {
      case 'master': return 'groupsList'
      default: return 'patientsList'
    }
  },

  getUserPermissions (state) {
    return state.authenticatedUser?.role
  }
}

export default getters
