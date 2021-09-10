import { Device } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    data: {
      type: Array as () => PropType<Device[]>,
      default: () => []
    }
  }
})
export default class TableDevices extends Vue {

  showDevice (device: Device): void {
    this.$emit('device:show', device.id_device)
  }

  editDevice (device: Device): void {
    this.$emit('device:edit', device.id_device)
  }

  deleteDevice (device: Device): void {
    this.$emit('device:delete', device.id_device)
  }
}
