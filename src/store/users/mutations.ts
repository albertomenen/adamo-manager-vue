import { MutationTree } from 'vuex'
import { UserStateInterface } from './state'

const mutations: MutationTree<UserStateInterface> = {
  setEditing (state, value: boolean) {
    state.isEditing = value
  }
}

export default mutations
