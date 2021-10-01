import { axiosInstance } from '@/utils/axios'
import { ApiListResponse, ApiRequest, ApiRoutes, Device, DeviceCreate, StationList } from 'adamo-components'
import { ActionTree } from 'vuex'
import { StateInterface } from '..'
import { DeviceStateInterface } from './state'

const actions: ActionTree<DeviceStateInterface, StateInterface> = {

  async action_getDevices (_, { filters, ...params }: ApiRequest): Promise<ApiListResponse<Device>> {
    const { data } = await axiosInstance.get(`/${ApiRoutes.Device}`, {
      params: {
        filters: JSON.stringify(filters),
        ...params
      }
    })

    return data
  },

  async action_getDevice (_, deviceId: string): Promise<Device> {
    const { data } = await axiosInstance.get(`/${ApiRoutes.Device}/${deviceId}`)

    return data
  },

  async action_getStations (_, { groupId, locationId }): Promise<ApiListResponse<StationList>> {
    const { data } = await axiosInstance.get(`/${ApiRoutes.Group}/${groupId}/${ApiRoutes.Location}/${locationId}/station`)

    return data
  },

  async action_createDevice (_, deviceForm: DeviceCreate): Promise<Device> {
    const { data } = await axiosInstance.post(`/${ApiRoutes.Device}`, deviceForm)

    return data
  },

  async action_updateDevice (_, { deviceId, deviceForm }): Promise<Device> {
    const { data } = await axiosInstance.put(`${ApiRoutes.Device}/${deviceId}`, deviceForm)

    return data
  },

  async action_deleteDevice (_, deviceId: string): Promise<Device> {
    const { data } = await axiosInstance.delete(`/${ApiRoutes.Device}/${deviceId}`)

    return data
  }
}

export default actions
