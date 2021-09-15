import { MutationTree } from 'vuex'
import { DeviceStateInterface } from './state'

const mutations: MutationTree<DeviceStateInterface> = {

  setDeviceEditContext (state, context: boolean) {
    state.isEditMode = context
  }
}

export default mutations
