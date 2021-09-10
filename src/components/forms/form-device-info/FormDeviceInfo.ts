import { DeviceCreate, Group } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FormDeviceInfo extends Vue {

  @Prop({
    type: Object,
    default: () => ({})
  })
  formData!: DeviceCreate

  @Prop({
    type: Array as () => PropType<Group>,
    default: () => []
  })
  groups!: Group[]
}
