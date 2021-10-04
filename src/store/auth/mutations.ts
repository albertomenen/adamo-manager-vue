import { AuthUser } from 'adamo-components'
import { MutationTree } from 'vuex'
import { AuthStateInterface } from './state'

const mutation: MutationTree<AuthStateInterface> = {

  SET_AUTHENTICATED_USER (state, user: AuthUser) {
    localStorage.user = JSON.stringify(user)
    state.authenticatedUser = user
  },

  SET_TOKEN (state, { token, persistent }) {
    if (persistent) {
      localStorage.token = token
    }
    state.token = token
  },


  SET_REFRESH_TOKEN (state, reToken: string) {
    localStorage.reToken = reToken
    state.reToken = reToken
  },

  REMOVE_SESSION (state) {
    localStorage.clear()
    state.authenticatedUser = null
    state.reToken = null
    state.token = null
  }
}

export default mutation
