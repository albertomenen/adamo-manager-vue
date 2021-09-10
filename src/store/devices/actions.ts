import { axiosInstance } from '@/utils/axios'
import { ApiListResponse, ApiRequest, Device } from 'adamo-components'
import { ActionTree } from 'vuex'
import { StateInterface } from '..'
import { DeviceStateInterface } from './state'

const actions: ActionTree<DeviceStateInterface, StateInterface> = {

  async action_getDevices (_, params: ApiRequest): Promise<ApiListResponse<Device>> {
    const { data } = await axiosInstance.get(`/device`, { params })

    return data
  }
}

export default actions
