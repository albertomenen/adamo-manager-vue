import { ApiListResponse, ApiRequest, Device } from 'adamo-components'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const devicesStore = namespace('devices')

@Component({
  components: {
    TableDevices: () => import('@/components/tables/table-devices/TableDevices.vue')
  }
})
export default class TabsDevices extends Vue {

  devices: Device[] = []

  currentPage = 1

  totalRecords = 0

  totalPages = 0

  @Prop({
    type: Number
  })
  tab

  @devicesStore.Action action_getDevices!: (params?: ApiRequest) => Promise<ApiListResponse<Device>>

  setPage (page: number): void {
    this.currentPage = page
    this.getDevices()
  }

  async getDevices (params?: ApiRequest): Promise<void> {
    try {
      this.$emit('loading', true)
      const { data, pagination } = await this.action_getDevices({
        ...params,
        page: this.currentPage,
        size: 7
      })

      this.devices = data
      this.totalRecords = pagination.totalElements
      this.totalPages = pagination.pages
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: this.$i18n.tc('devices.num', 2)
      }))
    }
    finally {
      this.$emit('loading', false)
    }
  }

  showDevice (deviceId: string): void {
    console.log('show device', deviceId)
  }

  editDevice (deviceId: string): void {
    console.log('edit device', deviceId)
  }

  deleteDevice (deviceId: string): void {
    console.log('delete device', deviceId)
  }

  @Watch('tab')
  onChangeTab (value: number): void {
    if (value === 1) {
      this.currentPage = 1
      this.getDevices()
    }
  }
}
