import { LocationCreate } from '@/models/group.model'
import { PropType } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    formData: {
      type: Object as () => PropType<LocationCreate>,
      default: () => ({})
    },
    withGroup: {
      type: Boolean,
      default: true
    }
  }
})
export default class FormLocationInfo extends Vue {

  handleCreate (): void {
    this.$emit('save', this.$props.formData)
  }
}
