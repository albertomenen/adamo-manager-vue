import { Group } from 'adamo-components'
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
  },

  setGroups (state, groups: Group[]): void {
    state.groups = groups
  }
}

export default mutations
