import { MutationTree } from 'vuex'
import { GroupsStateInterface } from './state'

const mutations: MutationTree<GroupsStateInterface> = {

  setGroupEditContext (state, context: boolean) {
    state.isEditGroup = context
  },

  setLocationEditContext (state, context: boolean) {
    state.isEditLocation = context
  },

  setIdLocationEdit (state, locationId: string) {
    state.idLocationEdit = locationId
  }
}

export default mutations
