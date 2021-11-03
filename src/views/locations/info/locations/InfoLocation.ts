import { Location } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const groupsStore = namespace('groups')

@Component
export default class InfoLocation extends Vue {

  @Prop({
    type: Object as () => PropType<Location>,
    default: null
  }) location!: Location

  locationEdit: Location | null = null

  @groupsStore.Getter getLocationEditContext!: boolean

  @groupsStore.Mutation setLocationEditContext!: (context: boolean) => void

  handleEditLocation (): void {
    this.locationEdit = { ...this.location! }
    this.setLocationEditContext(true)
  }
}
