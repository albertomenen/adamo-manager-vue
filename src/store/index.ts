import Vue from 'vue'
import Vuex from 'vuex'

// Import Modules
import auth from './auth'
import patients from './patients'
import treatments from './treatments'

// Import Interfaces
import { AuthStateInterface } from './auth/state'
import { PatientsStateInterface } from './patients/state'
import { TreatmentsStateInterface } from './treatments/state'

Vue.use(Vuex)

export interface StateInterface {
  auth: AuthStateInterface
  patients: PatientsStateInterface
  treatments: TreatmentsStateInterface
}

export default new Vuex.Store<StateInterface>({
  modules: {
    auth,
    patients,
    treatments
  }
})
