import { LocationCreate } from '@/models/group.model'
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
export default class ModalLocationForm extends Vue {

  formLocation: LocationCreate = {
    location_name: '',
    address: '',
    country: '',
    city: '',
    town: '',
    phone: '',
    contact_name: '',
    email: ''
  }
}
