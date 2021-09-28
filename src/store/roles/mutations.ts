import { Role } from 'adamo-components'
import { MutationTree } from 'vuex'
import { RoleStateInterface } from './state'

const mutations: MutationTree<RoleStateInterface> = {

  setRoles (state, roles: Role[]) {
    state.roles = roles
  }
}

export default mutations
