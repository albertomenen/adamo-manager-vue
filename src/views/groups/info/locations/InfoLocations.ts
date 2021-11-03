import { Location } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const groupsStore = namespace('groups')

@Component({
  props: {
    location: {
      type: Object as () => PropType<Location>,
      default: null
    }
  }
})
export default class InfoLocations extends Vue {

  locationEdit: Location | null = null

  @groupsStore.Getter getLocationEditContext!: boolean

  @groupsStore.Mutation setLocationEditContext!: (context: boolean) => void

  @groupsStore.Mutation setIdLocationEdit!: (locationId: string) => void

  handleEditLocation (location: Location): void {
    this.locationEdit = location
    this.setLocationEditContext(true)
    this.setIdLocationEdit(location.id_location)
  }
}
