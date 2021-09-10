import { Group, Role, UserCreate } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    groups: {
      type: Array as () => PropType<Group[]>,
      default: () => []
    },
    roles: {
      type: Array as () => PropType<Role>,
      default: () => []
    }
  }
})
export default class ModalUserForm extends Vue {

  formData: UserCreate = {
    id_group: null,
    user_name: '',
    phone: '',
    email: '',
    password: '',
    country: '',
    name: '',
    last_name: '',
    role_id: null,
    id_location: null
  }

  handleSubmit (): void {
    this.$emit('cancel')
    this.$emit('ok', this.formData)
  }
}
