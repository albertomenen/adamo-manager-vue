import { Location } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TableLocations extends Vue {

  @Prop({
    type: Array as () => PropType<Location[]>,
    default: () => []
  })
  data!: Location[]

  showLocation (location: Location): void {
    this.$emit('location:show', location.id_location)
  }

  editLocation (location: Location): void {
    this.$emit('location:edit', location.id_location)
  }

  deleteLocation (location: Location): void {
    this.$emit('location:delete', location.id_location)
  }
}
