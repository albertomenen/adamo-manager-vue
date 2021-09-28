import { GetterTree } from 'vuex'
import { StateInterface } from 'src/store/index'
import { RoleStateInterface } from './state'

const getters: GetterTree<RoleStateInterface, StateInterface> = {

  getRoles (state) {
    return state.roles
  }
}

export default getters
