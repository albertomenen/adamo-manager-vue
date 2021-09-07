import { ActionTree } from 'vuex'
import { StateInterface } from 'src/store/index'
import { GroupsStateInterface } from './state'
import { axiosInstance } from '@/utils/axios'
import { ApiRequest, ApiRoutes, Group, GroupList, Location } from 'adamo-components'
import { GroupCreate } from '@/models/group.model'

const actions: ActionTree<GroupsStateInterface, StateInterface> = {

  async action_getGroups (_, params: ApiRequest): Promise<GroupList> {
    const { data } = await axiosInstance.get(`/${ApiRoutes.Group}`, { params })

    return data
  },

  async action_createGroup (_, formGroup: GroupCreate): Promise<Group> {
    const { data } = await axiosInstance.post(`/${ApiRoutes.Group}`, formGroup)

    return data
  },

  async action_createLocation (_, { groupId, formLocation }): Promise<Location> {
    const { data } = await axiosInstance.post(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Location}`, formLocation)

    return data
  }
}

export default actions
