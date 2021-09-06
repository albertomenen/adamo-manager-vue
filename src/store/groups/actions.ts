import { ActionTree } from 'vuex'
import { StateInterface } from 'src/store/index'
import { GroupsStateInterface } from './state'
import { axiosInstance } from '@/utils/axios'
import { ApiRequest, ApiRoutes, GroupList } from 'adamo-components'

const actions: ActionTree<GroupsStateInterface, StateInterface> = {

  async action_getGroups (_, params: ApiRequest): Promise<GroupList> {
    const { data } = await axiosInstance.get(`/${ApiRoutes.Group}`, { params })

    return data
  }
}

export default actions
