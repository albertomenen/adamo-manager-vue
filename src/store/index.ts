import Vue from 'vue'
import Vuex from 'vuex'

// Import Modules
import auth from './auth'
import patients from './patients'
import treatments from './treatments'
import groups from './groups'
import users from './users'
import devices from './devices'
import roles from './roles'

// Import Interfaces
import { AuthStateInterface } from './auth/state'
import { PatientsStateInterface } from './patients/state'
import { TreatmentsStateInterface } from './treatments/state'
import { GroupsStateInterface } from './groups/state'
import { UserStateInterface } from './users/state'
import { DeviceStateInterface } from './devices/state'
import { RoleStateInterface } from './roles/state'

Vue.use(Vuex)

export interface StateInterface {
  auth: AuthStateInterface
  patients: PatientsStateInterface
  treatments: TreatmentsStateInterface
  groups: GroupsStateInterface,
  users: UserStateInterface,
  devices: DeviceStateInterface,
  roles: RoleStateInterface
}

export default new Vuex.Store<StateInterface>({
  modules: {
    auth,
    patients,
    treatments,
    groups,
    users,
    devices,
    roles
  }
})
