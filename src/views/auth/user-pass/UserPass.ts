import { User } from 'adamo-components'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const auth = namespace('auth')
@Component
export default class UserPass extends Vue {

  password = ''
  passwordConfirm = ''
  errorMessage = ''
  loading = false

  get isRegisterEnabled (): boolean {
    return !!this.password && !!this.passwordConfirm && this.password === this.passwordConfirm
  }

  get errorMessageLabel () {
    if (!this.password && !this.passwordConfirm) return 'ㅤ'

    if (this.errorMessage) return this.errorMessage

    const validPasswordRegex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    if (!validPasswordRegex.test(this.password)) return 'La contraseña debe tener entre 6 y 16 caracteres y al menos un número'

    if (!this.isRegisterEnabled) return 'Las contraseñas no coinciden'

    return 'ㅤ'
  }

  @auth.Action action_updatePassword!: (user: unknown) => Promise<User>
  @auth.Action action_verifyPasswordToken!: (token: string) => Promise<boolean>

  async created () {
    try {
      const isTokenValid = await this.action_verifyPasswordToken(this.$route.params.token)

      if (!isTokenValid) {
        this.$router.push({ name: 'login' })
      }
    }
    catch {
      this.$router.push({ name: 'login' })
    }
  }

  async register (): Promise<void> {
    try {
      this.loading = true
      this.errorMessage = ''
      await this.action_updatePassword({
        password: this.password,
        token: this.$route.params.token
      })

      this.$notify.success('Se ha registrado correctamente. Puede iniciar sesión')

      this.$router.push({ name: 'login' })
    }
    catch (error: any) {
      this.errorMessage = error.response.data.message
    }
    finally {
      this.loading = false
    }
  }
}
