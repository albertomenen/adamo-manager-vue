import { DeviceList } from 'adamo-components'

export interface DeviceStateInterface {
  devices: DeviceList[],
  isEditMode: boolean
}

const state: DeviceStateInterface = {
  devices: [],
  isEditMode: false
}

export default state
