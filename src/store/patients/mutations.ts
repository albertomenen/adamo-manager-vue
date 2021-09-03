import { Patient } from 'adamo-components'
import { MutationTree } from 'vuex'
import { PatientsStateInterface } from './state'

const mutation: MutationTree<PatientsStateInterface> = {

  SET_PATIENTS (state, patients: Patient[]) {
    state.patients = patients
  },

  setPatientEditContext (state, context: boolean) {
    state.isEditMode = context
  },

  SET_SELECTEDPATIENT (state, patient: Patient) {
    state.patientSelected = patient
  }
}

export default mutation
