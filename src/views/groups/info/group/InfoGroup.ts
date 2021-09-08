import { Group } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const groupsStore = namespace('groups')

@Component({
  props: {
    data: {
      type: Object as () => PropType<Group>,
      default: () => ({})
    }
  }
})
export default class InfoGroup extends Vue {

  group!: Group

  @groupsStore.Getter getGroupEditContext!: boolean

  @groupsStore.Mutation setGroupEditContext!: (context: boolean) => void

  created (): void {
    this.group = this.$props.data
    const image = new Image()
    image.src = `data:image/png;base64,${this.group.logo!}`
    this.group.logo = this.group.logo?.slice(22)
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
  handleImage (e: any): void {
    const reader = new FileReader()

    reader.onload = (e: any) => {
      this.group.logo = e.target?.result?.slice(22)
    }
    reader.readAsDataURL(e)
  }
}
