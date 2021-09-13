import { axiosInstance } from '@/utils/axios'
import { formatRouteWithUserCreate } from '@/utils/urlByRole'
import { ApiListResponse, ApiRequest, User } from 'adamo-components'
import { ActionTree } from 'vuex'
import { StateInterface } from '..'
import { UserStateInterface } from './state'

const actions: ActionTree<UserStateInterface, StateInterface> = {

  async action_getUsers (_, params: ApiRequest): Promise<ApiListResponse<User>> {
    const { data } = await axiosInstance.get(`/users`, { params })

    return data
  },

  async action_createUser (_, { role_code, formData }): Promise<User> {
    const url = formatRouteWithUserCreate(role_code, formData.id_group, formData.id_location)
    const { data } = await axiosInstance.post(url, formData)

    return data
  }
}

export default actions
