import { ApiListResponse, Device, Group, Location, StationList } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const devicesStore = namespace('devices')
const groupsStore = namespace('groups')

@Component
export default class FormDeviceDetail extends Vue {

  groupName = ''

  locationName = ''

  groupSelected: Group | null = null

  fieldLocationDisabled = true

  locations: Location[] = []

  locationSelected: Location | null = null

  loadingStations = false

  fieldStationDisabled = true

  stations: StationList[] = []

  @Prop({
    type: Object as () => PropType<Device>,
    default: () => ({})
  })
  device!: Device

  @devicesStore.Getter getDeviceEditContext!: boolean

  @devicesStore.Mutation setDeviceEditContext!: (context: boolean) => void

  @devicesStore.Action action_getStations!: ({ groupId, locationId }) => Promise<ApiListResponse<StationList>>

  @groupsStore.Getter getGroups

  created (): void {
    this.locationName = this.device.station?.location?.location_name ?? ''
    this.groupName = this.device.group?.group_name
  }

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
  onChangeGroupSelected (group: Group): void {
    if (group) {
      this.device.group = group
      this.locations = group.locations
      this.fieldLocationDisabled = group.locations.length === 0 ? true : false
    }
  }

  @Watch('locationSelected')
  onChangeLocationSelected (value: string): void {
    if (value) {
      this.fieldStationDisabled = false
      this.getStations()
    }
  }
}
