import { ApiListResponse, ApiRequest, User } from 'adamo-components'
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

  @Prop({ type: Number }) tab

  @usersStore.Action action_getUsers!: (params?: ApiRequest) => Promise<ApiListResponse<User>>

  @usersStore.Action action_createUser!: ({ role_code, formData }) => Promise<User>
  @usersStore.Action action_deleteUser!: ({ userId, role_code, groupId, locationId }) => Promise<void>
  @usersStore.Mutation setEditing

  @groupsStore.Getter getGroups

  @rolesStore.Getter getRoles

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
        size: 6
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

  editUser (user: User): void {
    this.setEditing(true)
    this.showUser(user)
  }

  async deleteUser (user: User): Promise<void> {
    try {
      this.$emit('loading', true)
      await this.action_deleteUser({
        userId: user.id_user,
        role_code: user.role!.role_code,
        groupId: user.id_group,
        locationId: user.id_location
      })
      this.$notify.success(this.$t('notification.success', {
        noun: this.$t('nouns.theM'),
        resource: this.$tc('users.num', 1),
        action: this.$t('notification.actions.deleted')
      }))
      this.getUsers()
    }
    catch (e) {
      this.$notify.error(this.$t('notification.error', {
        noun: this.$t('nouns.theM'),
        resource: this.$tc('users.num', 1),
        action: this.$t('actions.delete')
      }))
    }
    finally {
      this.$emit('loading', false)

    }
  }

  async showNewUSerModal (): Promise<void> {
    try {
      this.$emit('loading', true)

      this.$modal({
        component: ModalUserForm,
        props: {
          groups: this.getGroups,
          roles: this.getRoles
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
