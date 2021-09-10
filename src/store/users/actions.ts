import { axiosInstance } from '@/utils/axios'
import { ApiListResponse, ApiRequest, User } from 'adamo-components'
import { ActionTree } from 'vuex'
import { StateInterface } from '..'
import { UserStateInterface } from './state'

const actions: ActionTree<UserStateInterface, StateInterface> = {

  async action_getUsers (_, params: ApiRequest): Promise<ApiListResponse<User>> {
    const { data } = await axiosInstance.get(`/users`, { params })

    return data
  }
}

export default actions
