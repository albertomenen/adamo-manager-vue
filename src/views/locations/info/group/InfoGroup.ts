import { Group } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const groupsStore = namespace('groups')

@Component
export default class InfoGroup extends Vue {

  @Prop({
    type: Object as () => PropType<Group>,
    default: () => ({})
  }) data!: Group

  group!: Group

  @groupsStore.Getter getGroupEditContext!: boolean

  @groupsStore.Mutation setGroupEditContext!: (context: boolean) => void

  created () {
    this.group = this.data
  }

  get getGroupLogo () {
    return `data:image/png;base64,${this.group.logo}` || require('@/assets/user.png')
  }

  handleImage (e: any): void {
    const reader = new FileReader()

    reader.onload = (e: any) => {
      this.group.logo = e.target.result.split(',')[1]
    }
    reader.readAsDataURL(e)
  }
}
