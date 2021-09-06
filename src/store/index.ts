import Vue from 'vue'
import Vuex from 'vuex'

// Import Modules
import auth from './auth'
import patients from './patients'
import treatments from './treatments'
import groups from './groups'

// Import Interfaces
import { AuthStateInterface } from './auth/state'
import { PatientsStateInterface } from './patients/state'
import { TreatmentsStateInterface } from './treatments/state'
import { GroupsStateInterface } from './groups/state'

Vue.use(Vuex)

export interface StateInterface {
  auth: AuthStateInterface
  patients: PatientsStateInterface
  treatments: TreatmentsStateInterface
  groups: GroupsStateInterface
}

export default new Vuex.Store<StateInterface>({
  modules: {
    auth,
    patients,
    treatments,
    groups
  }
})
