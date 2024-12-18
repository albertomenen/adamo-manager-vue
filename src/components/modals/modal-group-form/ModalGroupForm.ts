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
    group_name: '',
    address: '',
    country: '',
    city: '',
    town: '',
    phone: '',
    contact_name: '',
    email: '',
    logo: ''
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

  fillWithGroup = false

  handleSubmit (): void {
    this.$emit('cancel')
    this.$emit('ok', {
      formGroup: { ...this.formGroup, logo: this.formGroup.logo.split(',')[1] },
      formLocation: this.formLocation
    })
  }

  @Watch('fillWithGroup')
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
    this.$forceUpdate()
  }
}
