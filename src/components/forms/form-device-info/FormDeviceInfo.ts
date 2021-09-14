import { ApiListResponse, DeviceCreate, Group, Location, StationList } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const deviceStore = namespace('devices')

@Component
export default class FormDeviceInfo extends Vue {

  groupSelected: Group | null = null

  locationSelected: string | null = null

  locations: Location[] = []

  stations: StationList[] = []

  fieldLocationDisabled = true

  loadingStations = false

  fieldStationDisabled = true

  @Prop({
    type: Object,
    default: () => ({})
  })
  formData!: DeviceCreate

  @Prop({
    type: Array as () => PropType<Group>,
    default: () => []
  })
  groups!: Group[]

  @deviceStore.Action action_getStations!: ({ groupId, locationId }) => Promise<ApiListResponse<StationList>>

  async getStations (): Promise<void> {
    try {
      this.loadingStations = true
      const { data } = await this.action_getStations({
        groupId: this.groupSelected?.id_group,
        locationId: this.locationSelected
      })

      this.stations = data
      this.fieldStationDisabled = data.length === 0 ? true : false
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: this.$i18n.t('stations')
      }))
    }
    finally {
      this.loadingStations = false
    }
  }

  @Watch('groupSelected')
  onChangeGroup (group: Group): void {
    this.formData.group_id = group.id_group
    this.locationSelected = null
    this.formData.station_id = null
    this.locations = group.locations
    this.fieldLocationDisabled = group.locations.length === 0 ? true : false
    this.fieldStationDisabled = true
  }

  @Watch('locationSelected')
  onChangeLocationSelected (value: string): void {
    if (value) {
      this.fieldStationDisabled = false
      this.getStations()
    }
  }
}
