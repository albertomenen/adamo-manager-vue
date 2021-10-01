import { axiosInstance } from '@/utils/axios'
import { formatRouteWithUser, formatRouteWithUserCreate } from '@/utils/urlByRole'
import { ApiListResponse, ApiRequest, User } from 'adamo-components'
import { ActionTree } from 'vuex'
import { StateInterface } from '..'
import { UserStateInterface } from './state'

const actions: ActionTree<UserStateInterface, StateInterface> = {

  async action_getUsers (_, { filters, ...params }: ApiRequest): Promise<ApiListResponse<User>> {
    const { data } = await axiosInstance.get(`/users`, {
      params: {
        filters: JSON.stringify(filters),
        ...params
      }
    })

    return data
  },

  async action_getUser (_, { userId, role_code, groupId, locationId }): Promise<User> {
    const url = formatRouteWithUser(role_code, userId, groupId, locationId)
    const { data } = await axiosInstance.get(url)

    return data
  },

  async action_updateUser (_, { user, role_code, groupId, locationId }): Promise<User> {
    const url = formatRouteWithUser(role_code, user.id_user, groupId, locationId)
    const { data } = await axiosInstance.put(url, user)

    return data
  },

  async action_createUser (_, { role_code, formData }): Promise<User> {
    const url = formatRouteWithUserCreate(role_code, formData.id_group, formData.id_location)
    const { data } = await axiosInstance.post(url, formData)

    return data
  },

  async action_deleteUser (_, { userId, role_code, groupId, locationId }): Promise<void> {
    const url = formatRouteWithUser(role_code, userId, groupId, locationId)
    return axiosInstance.delete(url)
  }
}

export default actions
