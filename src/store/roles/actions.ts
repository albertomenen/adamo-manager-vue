import { axiosInstance } from '@/utils/axios'
import { ApiListResponse, Role } from 'adamo-components'
import { ActionTree } from 'vuex'
import { StateInterface } from '..'
import { RoleStateInterface } from './state'

const actions: ActionTree<RoleStateInterface, StateInterface> = {

  async action_getRoles (): Promise<ApiListResponse<Role>> {
    const { data } = await axiosInstance.get('/role')

    return data
  }
}

export default actions
