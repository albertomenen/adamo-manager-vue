import { ActionTree } from 'vuex'

import { StateInterface } from 'src/store/index'
import { AuthStateInterface } from './state'
import { axiosInstance } from '@/utils/axios'
import { AuthResponse } from 'adamo-components'

const actions: ActionTree<AuthStateInterface, StateInterface> = {

  /**
   * Iniciar sesión
   * @param user - Datos de login del usuario
   */
  async action_login ({ commit }, userCredentials): Promise<AuthResponse> {
    const { data } = await axiosInstance.post<AuthResponse>('/login', userCredentials)

    const { Authorization, user } = data

    axiosInstance.defaults.headers.common['Authorization'] = Authorization

    commit('SET_TOKEN', Authorization)
    // commit('SET_REFRESH_TOKEN', refreshToken)
    commit('SET_AUTHENTICATED_USER', user)

    return data
  },

  /**
   * Cerrar sesión
   */
  async action_logout ({ commit }): Promise<void> {
    await axiosInstance.post('/logout')
    commit('REMOVE_SESSION')
  }
}

export default actions
