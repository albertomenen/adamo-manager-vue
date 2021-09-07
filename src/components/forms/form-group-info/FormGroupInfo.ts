import { GroupCreate } from '@/models/group.model'
import { PropType } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    formData: {
      type: Object as () => PropType<GroupCreate>,
      default: () => ({})
    }
  }
})
export default class FormGroupInfo extends Vue {}
