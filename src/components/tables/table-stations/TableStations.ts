import { Station } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TableStations extends Vue {

  @Prop({
    type: Array as () => PropType<Station[]>,
    default: () => []
  })
  data!: Station[]

  deleteStation (station: Station): void {
    this.$emit('station:delete', station.id_station)
  }
}
