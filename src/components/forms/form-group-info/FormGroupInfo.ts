import { GroupCreate } from '@/models/group.model'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FormGroupInfo extends Vue {

  @Prop({
    type: Object as () => PropType<GroupCreate>,
    default: () => ({})
  }) formData!: GroupCreate

  handleImage (e: any): void {
    const reader = new FileReader()

    reader.onload = (e: any) => {
      this.$props.formData.logo = e.target.result
    }
    reader.readAsDataURL(e)
  }
}
