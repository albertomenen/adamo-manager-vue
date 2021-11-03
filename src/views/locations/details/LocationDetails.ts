import { ApiListResponse, Location, StationList } from 'adamo-components'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ModalStationForm from '@/components/modals/modal-station-form/ModalStationForm.vue'

const groupsStore = namespace('groups')
const devicesStore = namespace('devices')

@Component({
  components: {
    InfoLocation: () => import('@/views/locations/info/locations/InfoLocation.vue'),
    TableStations: () => import('@/components/tables/table-stations/TableStations.vue')
  }
})
export default class LocationDetails extends Vue {

  tab = 0

  loadingPage = false

  location: Location | null = null
  stations: StationList[] = []
  fieldStationDisabled = false

  @groupsStore.Getter getLocationEditContext!: boolean

  @groupsStore.Mutation setLocationEditContext!: (context: boolean) => void

  @groupsStore.Action action_getLocation!: ({ groupId, locationId }) => Promise<Location>

  @groupsStore.Action action_updateLocation!: ({ groupId, formLocation }) => Promise<Location>
  @devicesStore.Action action_getStations!: ({ groupId, locationId }) => Promise<ApiListResponse<StationList>>
  @groupsStore.Action action_createStation!: ({ groupId, locationId, formStation }) => Promise<void>
  @groupsStore.Action action_deleteStation!: ({ groupId, locationId, stationId }) => Promise<void>

  getStationEditContext = false

  created (): void {
    this.getLocationData()
  }

  beforeDestroy (): void {
    this.setLocationEditContext(false)
  }

  async getLocationData (): Promise<void> {
    try {
      this.loadingPage = true

      const [location, stations] = await Promise.all([
        this.action_getLocation({
          groupId: this.$route.params.groupId,
          locationId: this.$route.params.locationId
        }),
        this.action_getStations({
          groupId: this.$route.params.groupId,
          locationId: this.$route.params.locationId
        })
      ])
      this.location = location
      this.stations = stations.data
      this.fieldStationDisabled = stations.data.length === 0 ? true : false
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: this.$tc('locations.num', 1)
      }))
    }
    finally {
      this.loadingPage = false
    }
  }

  async updateLocation (): Promise<void> {
    try {
      this.loadingPage = true
      await this.action_updateLocation({
        groupId: this.$route.params.groupId,
        formLocation: this.location
      })
      this.$notify.success(this.$t('notification.success', {
        noun: this.$t('nouns.theF'),
        resource: this.$tc('locations.num', 1),
        action: this.$t('notification.actions.updated')
      }))
      this.getLocationData()
    } catch (error) {
      console.log(error)
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('actions.edit').toString().toLowerCase(),
        resource: this.$tc('locations.num', 1),
        noun: this.$t('nouns.theF')
      }))
    }
    finally {
      this.loadingPage = false
      this.setLocationEditContext(false)
    }
  }

  cancelLocationUpdate (): void {
    this.setLocationEditContext(false)
  }

  handleNewStation () {
    this.$modal({
      component: ModalStationForm,
      onOk: async (data) => {
        try {
          this.loadingPage = true

          await this.action_createStation({
            groupId: this.$route.params.groupId,
            locationId: this.$route.params.locationId,
            formStation: data
          })

          this.$notify.success(this.$t('notification.success', {
            noun: this.$t('nouns.theF'),
            resource: this.$tc('fields.station', 1),
            action: this.$t('notification.actions.created')
          }))

          this.getLocationData()
        }
        catch (error) {
          this.$notify.error(this.$t('notification.error', {
            noun: (this.$t('nouns.theM') as string).toLowerCase(),
            action: (this.$t('actions.create') as string).toLowerCase(),
            resource: this.$tc('fields.station', 1).toLowerCase()
          }))
        }
        finally {
          this.loadingPage = false
        }
      }
    })
  }

  async deleteStation (stationId) {
    try {
      this.loadingPage = true

      await this.action_deleteStation({
        groupId: this.$route.params.groupId,
        locationId: this.$route.params.locationId,
        stationId
      })

      this.$notify.success(this.$t('notification.success', {
        noun: this.$t('nouns.theF'),
        resource: this.$tc('fields.station', 1),
        action: this.$t('notification.actions.deleted')
      }))

      this.getLocationData()
    }
    catch (error) {
      this.$notify.error(this.$t('notification.error', {
        noun: (this.$t('nouns.theM') as string).toLowerCase(),
        action: (this.$t('actions.delete') as string).toLowerCase(),
        resource: this.$tc('fields.station', 1).toLowerCase()
      }))
      this.loadingPage = false
    }
  }
}
