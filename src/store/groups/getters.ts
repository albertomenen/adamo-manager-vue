import { GetterTree } from 'vuex'
import { StateInterface } from 'src/store/index'
import { GroupsStateInterface } from './state'

const getters: GetterTree<GroupsStateInterface, StateInterface> = {

  getGroupEditContext (state) {
    return state.isEditGroup
  },

  getLocationEditContext (state) {
    return state.isEditLocation
  },

  getIdLocationEdit (state) {
    return state.idLocationEdit
  }
}

export default getters
