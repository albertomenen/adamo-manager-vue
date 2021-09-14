import { Device } from 'adamo-components'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const devicesStorage = namespace('devices')

@Component({
  components: {
    FormDeviceDetail: () => import('@/components/forms/form-device-detail/FormDeviceDetail.vue')
  }
})
export default class DetailsDevices extends Vue {

  tab = 0

  loadingPage = false

  device: Device | null = null

  @devicesStorage.Action action_getDevice!: (deviceId: string) => Promise<Device>

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
}
