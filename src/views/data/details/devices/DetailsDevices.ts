import { Device } from 'adamo-components'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const devicesStore = namespace('devices')

@Component({
  components: {
    FormDeviceDetail: () => import('@/components/forms/form-device-detail/FormDeviceDetail.vue')
  }
})
export default class DetailsDevices extends Vue {

  tab = 0

  loadingPage = false

  device: Device | null = null

  @devicesStore.Getter getDeviceEditContext!: boolean

  @devicesStore.Action action_getDevice!: (deviceId: string) => Promise<Device>

  @devicesStore.Action action_updateDevice!: ({ deviceId, deviceForm }) => Promise<void>

  @devicesStore.Mutation setDeviceEditContext!: (context: boolean) => void

  created (): void {
    this.getDevice()
  }

  async getDevice (): Promise<void> {
    try {
      this.loadingPage = true
      const device = await this.action_getDevice(this.$route.params.deviceId)

      this.device = device
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: (this.$i18n.tc('devices.num', 1) as string).toLowerCase()
      }))
    }
    finally {
      this.loadingPage = false
    }
  }

  async updateDevice (): Promise<void> {
    try {
      this.loadingPage = true
      const deviceForm = {
        group_id: this.device?.group?.id_group ?? null,
        mac: this.device?.mac,
        station_id: this.device?.station_id ?? null,
        serial_number: this.device?.serial_number,
        hw_version: this.device?.hw_version,
        sw_version: this.device?.sw_version,
        device_name: this.device?.device_name
      }
      await this.action_updateDevice({
        deviceId: this.device?.id_device,
        deviceForm
      })
      this.$notify.success(this.$t('notification.success', {
        noun: this.$t('nouns.theM'),
        resource: this.$tc('devices.num', 1),
        action: this.$t('notification.actions.updated')
      }))
      this.getDevice()
    }
    catch (error) {
      this.$notify.error(this.$t('notification.error', {
        noun: (this.$t('nouns.theM') as string).toLowerCase(),
        action: (this.$t('actions.edit') as string).toLowerCase(),
        resource: this.$tc('devices.num', 1).toLowerCase()
      }))
    }
    finally {
      this.loadingPage = false
      this.setDeviceEditContext(false)
    }
  }

  cancelDeviceUpdate (): void {
    this.setDeviceEditContext(false)
    this.getDevice()
  }
}
