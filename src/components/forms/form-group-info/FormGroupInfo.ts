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

  /* eslint-disable @typescript-eslint/no-explicit-any */
  /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
  handleImage (e: any): void {
    const reader = new FileReader()

    reader.onload = (e: any) => {
      this.$props.formData.logo = e.target?.result?.slice(22)
    }
    reader.readAsDataURL(e)
  }
}
