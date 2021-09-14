import { ApiListResponse, ApiRequest, Device, DeviceCreate, Group } from 'adamo-components'
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

  devices: Device[] = []

  currentPage = 1

  totalRecords = 0

  totalPages = 0

  @Prop({
    type: Number
  })
  tab

  @devicesStore.Action action_getDevices!: (params?: ApiRequest) => Promise<ApiListResponse<Device>>

  @devicesStore.Action action_createDevice!: (deviceForm: DeviceCreate) => Promise<Device>

  @groupsStore.Action action_getGroups!: () => Promise<ApiListResponse<Group>>

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

  async showNewDeviceModal (): Promise<void> {
    try {
      this.$emit('loading', true)
      const groups = await this.action_getGroups()

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
