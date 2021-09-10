import { ApiListResponse, ApiRequest, User } from 'adamo-components'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const usersStore = namespace('users')

@Component({
  components: {
    TableUsers: () => import('@/components/tables/table-users/TableUsers.vue')
  }
})
export default class TabsUsers extends Vue {

  users: User[] = []

  currentPage = 1

  totalRecords = 0

  totalPages = 0

  @Prop({
    type: Number
  })
  tab

  @usersStore.Action action_getUsers!: (params?: ApiRequest) => Promise<ApiListResponse<User>>

  created (): void {
    this.getUsers()
  }

  setPage (page: number): void {
    this.currentPage = page
    this.getUsers()
  }

  async getUsers (params?: ApiRequest): Promise<void> {
    try {
      this.$emit('loading', true)
      const { data, pagination } = await this.action_getUsers({
        ...params,
        page: this.currentPage,
        size: 7
      })

      this.users = data
      this.totalRecords = pagination.totalElements
      this.totalPages = pagination.pages
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: this.$i18n.tc('users.num', 2)
      }))
    }
    finally {
      this.$emit('loading', false)
    }
  }

  showUser (userId: string): void {
    console.log('show user', userId)
  }

  editUser (userId: string): void {
    console.log('edit user', userId)
  }

  deleteUser (userId: string): void {
    console.log('delete user', userId)
  }

  @Watch('tab')
  onChangeTab (value: number): void {
    if (value === 0) {
      this.currentPage = 1
      this.getUsers()
    }
  }
}
