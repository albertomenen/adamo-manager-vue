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
export default class FormGroupInfo extends Vue {

  handleImage (e: any): void {
    const reader = new FileReader()

    reader.onload = (e) => {
      this.$props.formData.logo = e.target?.result?.slice(22)
    }
    reader.readAsDataURL(e)
  }
}
