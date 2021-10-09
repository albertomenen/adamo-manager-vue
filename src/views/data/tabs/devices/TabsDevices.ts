import { ApiListResponse, ApiRequest, Device, DeviceCreate, Filter } from 'adamo-components'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import ModalDeviceForm from '@/components/modals/modal-device-form/ModalDeviceForm.vue'

const devicesStore = namespace('devices')
const groupsStore = namespace('groups')

@Component({
  components: {
    TableDevices: () => import('@/components/tables/table-devices/TableDevices.vue')
  }
})
export default class TabsDevices extends Vue {

  @Prop({
    type: Array,
    default: null
  }) filters!: Filter[]

  @Prop({
    type: Number
  }) tab

  @Watch('filters', { deep: true })
  onFiltersChange () {
    if (this.tab === 1) {
      this.getDevices()
    }
  }

  devices: Device[] = []

  currentPage = 1

  totalRecords = 0

  totalPages = 0



  @devicesStore.Action action_getDevices!: (params?: ApiRequest) => Promise<ApiListResponse<Device>>

  @devicesStore.Action action_createDevice!: (deviceForm: DeviceCreate) => Promise<Device>

  @devicesStore.Action action_deleteDevice!: (deviceId: string) => Promise<void>

  @devicesStore.Mutation setDeviceEditContext!: (context: boolean) => void

  @groupsStore.Getter getGroups

  created (): void {
    if (this.tab === 1) {
      this.getDevices()
    }
  }

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
        size: 7,
        filters: this.filters
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
    this.$router.push({
      name: 'dataDeviceDetail',
      params: {
        deviceId
      }
    })
  }

  editDevice (deviceId: string): void {
    this.setDeviceEditContext(true)
    this.showDevice(deviceId)
  }

  async deleteDevice (deviceId: string): Promise<void> {
    try {
      this.$emit('loading', true)
      await this.action_deleteDevice(deviceId)
      this.$notify.success(this.$t('notification.success', {
        noun: this.$t('nouns.theM'),
        resource: this.$tc('devices.num', 1),
        action: this.$t('notification.actions.deleted')
      }))
      this.getDevices()
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: (this.$i18n.t('actions.delete') as string).toLowerCase(),
        resource: (this.$i18n.tc('devices.num', 1) as string).toLowerCase()
      }))
    }
    finally {
      this.$emit('loading', false)
    }
  }

  async showNewDeviceModal (): Promise<void> {
    try {
      this.$emit('loading', true)
      const groups = await this.getGroups

      this.$modal({
        component: ModalDeviceForm,
        props: {
          groups: groups.data
        },
        onOk: (formData: DeviceCreate) => {
          this.action_createDevice(formData)
          this.$notify.success(this.$t('notification.success', {
            noun: this.$t('nouns.theM'),
            resource: this.$tc('devices.num', 1),
            action: this.$t('notification.actions.created')
          }))
          this.getDevices()
        }
      })
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

  @Watch('tab')
  onChangeTab (value: number): void {
    if (value === 1) {
      this.currentPage = 1
      this.getDevices()
    }
  }
}
