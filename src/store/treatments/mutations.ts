import { Treatment } from 'adamo-components'
import { MutationTree } from 'vuex'
import { TreatmentsStateInterface } from './state'

const mutation: MutationTree<TreatmentsStateInterface> = {

  SET_TREATMENTS (state, treatments: Treatment[]) {
    state.treatments = treatments
  },

  SET_TREATMENTOFFLINE (state, treatment: Treatment) {
    state.treatmentOffline = treatment
  }
}

export default mutation
