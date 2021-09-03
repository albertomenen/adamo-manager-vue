import { GetterTree } from 'vuex'
import { StateInterface } from 'src/store/index'
import { PatientsStateInterface } from './state'

const getters: GetterTree<PatientsStateInterface, StateInterface> = {
  getPatients (state) {
    return state.patients
  },

  getPatientEditContext (state) {
    return state.isEditMode
  },

  getPatient (state) {
    return state.patientSelected
  }
}

export default getters
