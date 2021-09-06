import { User } from 'adamo-components'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import AModalRecoverPass from 'adamo-components/src/components/modals/recover-pass-modal/AModalRecoverPass.vue'

const auth = namespace('auth')
@Component
export default class Login extends Vue {
  // Definiendo data

  /**
   * Correo del usuario
   */
  email = ''

  /**
   * Contraseña del formulario de login
   */
  password = ''

  /**
   * Estado de carga del formulario de inicio de sesión
   */
  loading = false

  /**
   * Mensaje de error que se muestra si falla el inicio de sesión
   */
  errorMessage = ''

  /**
   * Deternima si puede iniciar sesión dependiendo en si colocó usuario y contraseña
   */
  get isLoginEnabled (): boolean {
    return !!this.email && !!this.password
  }

  /**
   * Llamada al store para iniciar sesión
   * @param user - Datos del email y password del usuario a iniciar sesión
   */
  @auth.Action action_login!: (user: unknown) => Promise<User>

  /**
   * Función de login para ser llamada desde el template
   */
  async login (): Promise<void> {
    try {
      this.loading = true
      this.errorMessage = ''
      await this.action_login({
        email: this.email,
        password: this.password,
        source: 'manager'
      })

      this.$router.push({ name: 'groupsList' })
    }
    catch (error) {
      this.errorMessage = error.response.data.message
    }
    finally {
      this.loading = false
    }
  }

  recover (): void {
    this.$modal({
      component: AModalRecoverPass
    })
  }
}
