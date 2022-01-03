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

  handleCopyIdToClipboard ({ row }) {
    const el: HTMLElement = this.$refs[`id_station-${row.id_station}`] as HTMLElement

    navigator.clipboard.writeText(el.innerHTML)

    this.$notify.success(this.$t('id_was_copied', { id: row.id_station }))
  }
}
