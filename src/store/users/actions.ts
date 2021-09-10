import { axiosInstance } from '@/utils/axios'
import { ApiListResponse, ApiRequest, User, UserCreate } from 'adamo-components'
import { ActionTree } from 'vuex'
import { StateInterface } from '..'
import { UserStateInterface } from './state'

const actions: ActionTree<UserStateInterface, StateInterface> = {

  async action_getUsers (_, params: ApiRequest): Promise<ApiListResponse<User>> {
    const { data } = await axiosInstance.get(`/users`, { params })

    return data
  },

  async action_createUser (_, formData: UserCreate): Promise<User> {
    const { data } = await axiosInstance.post(`/users`, formData)

    return data
  }
}

export default actions
