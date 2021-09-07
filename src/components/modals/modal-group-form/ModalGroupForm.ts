import { GroupCreate, LocationCreate } from '@/models/group.model'
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {
    FormGroupSteps: () => import('@/components/forms/form-group-steps/FormGroupSteps.vue')
  },
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  }
})
export default class ModalGroupForm extends Vue {

  formGroup: GroupCreate = {
    id_system: '4aadfad8-29c4-49ff-8404-4c708b465bc5',
    group_name: '',
    address: '',
    country: '',
    city: '',
    town: '',
    phone: '',
    contact_name: '',
    email: ''
  }

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

  handleSubmit (): void {
    this.$emit('cancel')
    this.$emit('ok', {
      formGroup: this.formGroup,
      formLocation: this.formLocation
    })
  }

  @Watch('formLocation.fill_with_group')
  onChange (value: boolean): void {
    if (value) {
      const { address, country, city, town, phone, contact_name, email } = this.formGroup

      this.formLocation.address = address
      this.formLocation.country = country
      this.formLocation.city = city
      this.formLocation.town = town
      this.formLocation.phone = phone
      this.formLocation.contact_name = contact_name
      this.formLocation.email = email
    }
    else {
      this.formLocation.address = ''
      this.formLocation.country = ''
      this.formLocation.city = ''
      this.formLocation.town = ''
      this.formLocation.phone = ''
      this.formLocation.contact_name = ''
      this.formLocation.email = ''
    }
  }
}
