import { ApiListResponse, ApiRequest, Group, Role, User } from 'adamo-components'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import ModalUserForm from '@/components/modals/modal-user-form/ModalUserForm.vue'

const usersStore = namespace('users')
const groupsStore = namespace('groups')
const rolesStore = namespace('roles')

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

  @usersStore.Action action_createUser!: ({ role_code, formData }) => Promise<User>

  @groupsStore.Action action_getGroups!: () => Promise<ApiListResponse<Group>>

  @rolesStore.Action action_getRoles!: () => Promise<ApiListResponse<Role>>

  created (): void {
    if (this.tab === 0) {
      this.getUsers()
    }
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

  showUser (user: User): void {
    const query = {
      roleCode: user.role?.role_code,
      groupId: '',
      locationId: ''
    }
    switch (user.role?.role_code) {
      case 'practice_manager':
      case 'mp':
      case 'nmp':
        query.groupId = user.id_group
        query.locationId = user.id_location
        break

      case 'patient':
        query.groupId = user.id_group
        break
    }
    this.$router.push({
      name: 'dataProfile',
      params: {
        userId: user.id_user
      },
      query
    })
  }

  editUser (userId: string): void {
    console.log('edit user', userId)
  }

  deleteUser (userId: string): void {
    console.log('delete user', userId)
  }

  async showNewUSerModal (): Promise<void> {
    try {
      this.$emit('loading', true)
      const groups = await this.action_getGroups()
      const roles = await this.action_getRoles()

      this.$modal({
        component: ModalUserForm,
        props: {
          groups: groups.data,
          roles: roles.data
        },
        onOk: async ({ formData, roleSelected }) => {
          try {
            this.$emit('loading', true)
            await this.action_createUser({
              role_code: roleSelected.role_code,
              formData
            })
            this.$notify.success(this.$t('notification.success', {
              noun: this.$t('nouns.theM'),
              resource: this.$tc('users.num', 1),
              action: this.$t('notification.actions.created')
            }))
            this.getUsers()
          }
          catch (error) {
            this.$notify.error(this.$i18n.t('notification.error', {
              action: this.$i18n.t('actions.create'),
              resource: (this.$i18n.tc('users.num', 2) as string).toLowerCase()
            }))
          }
          finally {
            this.$emit('loading', false)
          }
        }
      })
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: (this.$i18n.t('fields.information') as string).toLowerCase()
      }))
    }
    finally {
      this.$emit('loading', false)
    }
  }

  @Watch('tab')
  onChangeTab (value: number): void {
    if (value === 0) {
      this.currentPage = 1
      this.getUsers()
    }
  }
}
