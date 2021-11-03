import { StationCreate } from '@/models/station.model'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    FormLocationInfo: () => import('@/components/forms/form-location-info/FormLocationInfo.vue')
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  }
})
export default class ModalStationForm extends Vue {

  formStation: StationCreate = {
    station_name: '',
    placed: '',
    installation_date: null
  }

  get installationDate () {
    if (!this.formStation.installation_date) return null

    const date = new Date(this.formStation.installation_date as string)

    return new Date(date.getTime() + Math.abs(date.getTimezoneOffset() * 60000))
  }

  set installationDate (val: Date | null) {
    this.formStation.installation_date = val
      ? val.getFullYear() +
      '-' +
      ('0' + (val.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + val.getDate()).slice(-2)
      : null
  }
}
