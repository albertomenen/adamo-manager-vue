import { ActionTree } from 'vuex'
import { StateInterface } from 'src/store/index'
import { GroupsStateInterface } from './state'
import { axiosInstance } from '@/utils/axios'
import { ApiListResponse, ApiRequest, ApiRoutes, Group, GroupList, Location } from 'adamo-components'
import { GroupCreate } from '@/models/group.model'

const actions: ActionTree<GroupsStateInterface, StateInterface> = {

  /**
   * Obtener listado de grupos
   * @param params - Parametros de paginacion
   */
  async action_getGroups (_, params: ApiRequest): Promise<GroupList> {
    const { data } = await axiosInstance.get(`/${ApiRoutes.Group}`, { params })

    return data
  },

  /**
   * Obtener listado de todos los grupos
   * @param params - Parametros de paginacion
   */
  async action_getAllGroups ({ commit }): Promise<void> {
    const { data } = await axiosInstance.get<ApiListResponse<GroupList>>(`/${ApiRoutes.Group}`, {
      params: {
        page: 1,
        size: 999999
      }
    })

    commit('setGroups', data.data)
  },

  /**
   * Obtener datos de grupo
   * @param groupId - Id del grupo
   */
  async action_getGroup (_, { groupId }): Promise<Group> {
    const { data } = await axiosInstance.get(`/${ApiRoutes.Group}/${groupId}`)

    return data
  },

  /**
   * Crear nuevo grupo
   * @param formGroup - datos de grupo
   */
  async action_createGroup (_, formGroup: GroupCreate): Promise<Group> {
    const { data } = await axiosInstance.post(`/${ApiRoutes.Group}`, formGroup)

    return data
  },

  /**
   * Crear nueva locacion
   * @param groupId - Id del grupo
   * @param formLocation - datos de locacion
   */
  async action_createLocation (_, { groupId, formLocation }): Promise<Location> {
    const { data } = await axiosInstance.post(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Location}`, formLocation)

    return data
  },

  /**
   * Modificar datos de grupo
   * @param formGroup - datos de grupo
   */
  async action_updateGroup (_, formGroup: Group): Promise<Group> {
    const { data } = await axiosInstance.put(`/${ApiRoutes.Group}/${formGroup.id_group}`, formGroup)

    return data
  },

  /**
   * Modificar datos de locacion
   * @param groupId - Id del grupo
   * @param formLocation - datos de locacion
   */
  async action_updateLocation (_, { groupId, formLocation }): Promise<Location> {
    const { data } = await axiosInstance.put(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Location}/${formLocation.id_location}`, formLocation)

    return data
  },

  /**
   * Eliminar grupo
   * @param groupId - Id del grupo
   */
  async action_deleteGroup (_, groupId: string): Promise<void> {
    await axiosInstance.delete(`/${ApiRoutes.Group}/${groupId}`)
  }
}

export default actions
