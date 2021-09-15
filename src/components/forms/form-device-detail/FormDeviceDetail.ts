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

  groups: Group[] = []

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

  @groupsStore.Action action_getGroups!: () => Promise<ApiListResponse<Group>>

  created (): void {
    this.locationName = this.device.station?.location?.location_name ?? ''
    this.groupName = this.device.group?.group_name
  }

  async getGroups (): Promise<void> {
    try {
      this.$emit('loading', true)
      const { data } = await this.action_getGroups()
      this.groups = data
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: (this.$i18n.t('fields.information') as string).toLowerCase()
      }))
    }
    finally {
      this.$emit('loading', false)
    }
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

  @Watch('getDeviceEditContext')
  onChangeEditContext (context: boolean): void {
    if (context) {
      this.getGroups()
    }
    else {
      this.groupSelected = null
      this.locationSelected = null
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
