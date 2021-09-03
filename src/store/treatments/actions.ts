import { ActionTree } from 'vuex'

import { StateInterface } from 'src/store/index'
import { TreatmentsStateInterface } from './state'
import { axiosInstance } from '@/utils/axios'
import { Treatment, ApiRoutes } from 'adamo-components'

const actions: ActionTree<TreatmentsStateInterface, StateInterface> = {

  /**
   * Obtener tratamiento de un paciente
   * @param treatmentId - Id del tratamiento
   */
  async action_getTreatment ({ rootGetters }, data): Promise<Treatment> {
    console.log(data)
    const groupId = rootGetters['auth/getUserGroupId']
    const response = await axiosInstance.get(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Patients}/${data.patientId}/treatment/${data.treatmentId}`)
    return response.data
  },

  /**
   * Crea un tratamiento
   * @param treatmentData Tratamento
   */
  async action_createTreatment ({ rootGetters }, { patientId, treatmentData }): Promise<Treatment> {
    const groupId = rootGetters['auth/getUserGroupId']
    const response = await axiosInstance.post<Treatment>(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Patients}/${patientId}/treatment`, treatmentData)
    return response.data
  },

  /**
   * Edita un tratamiento
   * @param patientId - Id del paciente
   * @param treatmentId - Id del tratamiento
   * @param treatmentData - Tratamiento
   * @returns
   */
  async action_editTreatment ({ rootGetters }, { patientId, treatmentId, treatmentData }): Promise<Treatment> {
    const groupId = rootGetters['auth/getUserGroupId']
    const response = await axiosInstance.put<Treatment>(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Patients}/${patientId}/treatment/${treatmentId}`, treatmentData)
    return response.data
  },

  /**
   * Elimina un tratamiento
   * @param treatmentId id del tratamiento
   */
  async action_deleteTreatment ({ rootGetters }, data): Promise<void> {
    const groupId = rootGetters['auth/getUserGroupId']
    await axiosInstance.delete(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Patients}/${data.patientId}/treatment/${data.treatmentId}`)
  },

  /**
   * Setear tratamiento offline
   * @param treatment
   */
  action_setTreatmentOffline ({ commit }, treatment: Treatment): void {
    commit('SET_TREATMENTOFFLINE', treatment)
  },

  /**
   * Crear cita
   * @param patientId - Id paciente
   * @param treatmentId - Id tratamiento
   * @param scheduleData - Form sesion
   * @returns
   */
  async action_createSchedule ({ rootGetters }, { patientId, treatmentId, scheduleData }): Promise<void> {
    const groupId = rootGetters['auth/getUserGroupId']
    return await axiosInstance.post(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Patients}/${patientId}/treatment/${treatmentId}/date`, scheduleData)
  },

  /**
   * Iniciar sesion
   * @param patientId - Id paciente
   * @param treatmentId - Id tratamiento
   * @param sessionData - Form session
   * @returns
   */
  async action_createSession ({ rootGetters }, { patientId, treatmentId, sessionData }): Promise<unknown> {
    const groupId = rootGetters['auth/getUserGroupId']
    const response = await axiosInstance.post(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Patients}/${patientId}/treatment/${treatmentId}/session`, sessionData)

    return response.data
  }
}

export default actions
