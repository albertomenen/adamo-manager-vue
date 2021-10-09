import { Device } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TableDevices extends Vue {
  @Prop({
    type: Array as () => PropType<Device[]>,
    default: () => []
  }) data!: Device[]

  showDevice (device: Device): void {
    this.$emit('device:show', device.id_device)
  }

  editDevice (device: Device): void {
    this.$emit('device:edit', device.id_device)
  }

  deleteDevice (device: Device): void {
    this.$emit('device:delete', device.id_device)
  }

  formatLocationName (device: Device): string {
    return device.station
      ? device.station.location.location_name
      : ''
  }

  formatRoomName (device: Device): string {
    return device.station
      ? device.station.station_name
      : ''
  }
}
