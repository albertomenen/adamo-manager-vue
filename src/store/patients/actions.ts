import { ActionTree } from 'vuex'

import { StateInterface } from 'src/store/index'
import { PatientsStateInterface } from './state'
import { axiosInstance } from '@/utils/axios'
import { Patient, ApiListResponse, ApiRequest, ApiRoutes } from 'adamo-components'

const actions: ActionTree<PatientsStateInterface, StateInterface> = {

  /**
   * Obtener listado de pacientes
   * @param params - Parámetros de paginación
   */
  async action_getPatients ({ rootGetters }, params: ApiRequest): Promise<ApiListResponse<Patient>> {
    const groupId = rootGetters['auth/getUserGroupId']
    const { data } = await axiosInstance.get(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Patients}`, { params })

    return data
  },

  /**
   * Obtener datos de un paciente
   * @param params - Parámetros de paginación
   */
  async action_getPatient ({ rootGetters, commit }, { params, patientId }: Record<string, unknown>): Promise<Patient> {
    const groupId = rootGetters['auth/getUserGroupId']
    const { data } = await axiosInstance.get(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Patients}/${patientId}`, { params })

    commit('SET_SELECTEDPATIENT', data)

    return data
  },

  async action_createPatient ({ rootGetters }, patientData: Patient): Promise<void> {
    const groupId = rootGetters['auth/getUserGroupId']
    return await axiosInstance.post(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Patients}`, patientData)
  },

  async action_updatePatient ({ rootGetters }, patientData: Patient): Promise<void> {
    const groupId = rootGetters['auth/getUserGroupId']
    await axiosInstance.put(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Patients}/${patientData.id_patient}`, patientData)
  },

  async action_deletePatient ({ rootGetters }, patientId: string): Promise<void> {
    const groupId = rootGetters['auth/getUserGroupId']
    await axiosInstance.delete(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Patients}/${patientId}`)
  }
}

export default actions
