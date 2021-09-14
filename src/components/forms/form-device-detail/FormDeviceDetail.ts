import { Device } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FormDeviceDetail extends Vue {

  @Prop({
    type: Object as () => PropType<Device>,
    default: () => ({})
  })
  device!: Device
}
