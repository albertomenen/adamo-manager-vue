import { GetterTree } from 'vuex'
import { StateInterface } from '..'
import { DeviceStateInterface } from './state'

const getters: GetterTree<DeviceStateInterface, StateInterface> = {

  getDeviceEditContext (state) {
    return state.isEditMode
  }
}

export default getters
