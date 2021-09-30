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
  @authStore.Action action_updateProfile

  /**
   * datos del usaurio
   */
  user!: User

  /**
   * Estado de carga de la página
   */
  isLoading = false

  created (): void {
    this.user = JSON.parse(JSON.stringify(this.getUser))
  }

  async saveProfile () {
    try {
      this.isLoading = true
      this.action_updateProfile(this.user)
    }
    catch {
      this.$notify.error('Hubo un error intentando actualizar el perfil')
    }
    finally {
      this.isLoading = false
    }
  }
}
