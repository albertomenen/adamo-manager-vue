import { GetterTree } from 'vuex'
import { StateInterface } from 'src/store/index'
import { TreatmentsStateInterface } from './state'

const getters: GetterTree<TreatmentsStateInterface, StateInterface> = {
  getPatients (state) {
    return state.treatments
  },

  getTreatmentOffline (state) {
    return state.treatmentOffline
  }
}

export default getters
