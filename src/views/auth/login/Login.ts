import { User } from 'adamo-components'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

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
  loadingPage = false

  /**
   * Mensaje de error que se muestra si falla el inicio de sesión
   */
  errorMessage = ''

  recoverModal = false

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
  @auth.Action action_recoverPass!: (email: string) => Promise<void>

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

  async recoverPass (email: string) {
    try {
      this.recoverModal = false
      this.loadingPage = true
      await this.action_recoverPass(email)
      this.$notify.success('Se ha enviado un correo de recuperación')
    }
    catch {
      this.$notify.error('Hubo un problema intentando enviar el correo de recuperación')
    }
    finally {
      this.loadingPage = false
    }
  }
}
