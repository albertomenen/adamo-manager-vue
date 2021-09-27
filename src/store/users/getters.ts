import { GetterTree } from 'vuex'
import { StateInterface } from '..'
import { UserStateInterface } from './state'

const getters: GetterTree<UserStateInterface, StateInterface> = {
  isEditing (state) {
    return state.isEditing
  }
}

export default getters
