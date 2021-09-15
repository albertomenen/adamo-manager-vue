import { User } from 'adamo-components'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const userStore = namespace('users')

@Component({
  components: {
    FormUsersDetail: () => import('@/components/forms/form-users-detail/FormUsersDetail.vue')
  }
})
export default class DetailsUsers extends Vue {

  tab = 0

  loadingPage = false

  user: User | null = null

  @userStore.Action action_getUser!: ({ userId, role_code, groupId, locationId }) => Promise<User>

  get getUserName (): string {
    return `${this.user?.name} ${this.user?.last_name}`
  }

  created (): void {
    this.getUser()
  }

  async getUser (): Promise<void> {
    try {
      this.loadingPage = true
      const { roleCode, groupId, locationId } = this.$route.query
      const user = await this.action_getUser({
        userId: this.$route.params.userId,
        role_code: roleCode,
        groupId,
        locationId
      })

      this.user = user
    } catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: (this.$i18n.tc('users.num', 1) as string).toLowerCase()
      }))
    }
    finally {
      this.loadingPage = false
    }
  }
}
