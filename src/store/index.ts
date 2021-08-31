import Vue from 'vue'
import Vuex from 'vuex'

// Import Modules
import auth from './auth'

// Import Interfaces
import { AuthStateInterface } from './auth/state'

Vue.use(Vuex)

export interface StateInterface {
  auth: AuthStateInterface
}

export default new Vuex.Store<StateInterface>({
  modules: {
    auth
  }
})
