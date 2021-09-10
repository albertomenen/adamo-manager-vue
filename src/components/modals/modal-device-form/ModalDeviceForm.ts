import { DeviceCreate, Group } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    FormDeviceInfo: () => import('@/components/forms/form-device-info/FormDeviceInfo.vue')
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    groups: {
      type: Array as () => PropType<Group>,
      default: () => []
    }
  }
})
export default class ModalDeviceForm extends Vue {

  formData: DeviceCreate = {
    group_id: null,
    mac: '',
    station_id: null,
    serial_number: '',
    hw_version: '',
    sw_version: '',
    device_name: ''
  }

  handleSubmit (): void {
    this.$emit('cancel')
    this.$emit('ok', this.formData)
  }
}
