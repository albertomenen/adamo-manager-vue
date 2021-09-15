import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { User } from 'adamo-components'


const authStore = namespace('auth')

@Component
export default class Profile extends Vue {

  /**
   * Obtener usuario logeado
   */
  @authStore.Getter getUser

  /**
   * datos del usaurio
   */
  user!: User

  created (): void {
    this.user = this.getUser
  }
}
