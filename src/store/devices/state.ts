import { DeviceList } from 'adamo-components'

export interface DeviceStateInterface {
  devices: DeviceList[]
}

const state: DeviceStateInterface = {
  devices: []
}

export default state
