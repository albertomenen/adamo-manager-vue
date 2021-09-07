import { LocationCreate } from '@/models/group.model'
import { PropType } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    formData: {
      type: Object as () => PropType<LocationCreate>,
      default: () => ({})
    }
  }
})
export default class FormLocationInfo extends Vue {}
