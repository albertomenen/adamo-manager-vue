import { ApiListResponse, ApiRequest, Group } from 'adamo-components'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import ModalGroupForm from '@/components/modals/modal-group-form/ModalGroupForm.vue'
import { FormsGroupLocation, GroupCreate } from '@/models/group.model'

const groupsStore = namespace('groups')

@Component({
  components: {
    SearchBar: () => import('@/components/search-bar/SearchBar.vue'),
    FilterGroups: () => import('@/components/filters/filter-groups/FilterGroups.vue'),
    TableGroups: () => import('@/components/tables/table-groups/TableGroups.vue')
  }
})
export default class GroupsList extends Vue {

  groups: Group[] = []

  currentPage = 1

  totalGroups = 0

  totalPages = 0

  loadingGroups = false

  loadingPage = true

  @groupsStore.Action action_getGroups!: (params?: ApiRequest) => Promise<ApiListResponse<Group>>

  @groupsStore.Action action_createGroup!: (groupData: GroupCreate) => Promise<Group>

  setPage (page: number): void {
    this.currentPage = page
    this.getGroups()
  }

  created (): void {
    this.getGroups()
  }

  async getGroups (): Promise<void> {
    try {
      this.loadingGroups = true
      const { data, pagination } = await this.action_getGroups({
        page: this.currentPage,
        size: 7
      })

      this.groups = data
      this.totalGroups = pagination.totalElements
      this.totalPages = pagination.pages
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: this.$i18n.tc('spaces.num', 2)
      }))
    }
    finally {
      this.loadingGroups = false
    }
  }

  showGroup (groupId: string): void {
    console.log('show', groupId)
  }

  editGroup (groupId: string): void {
    console.log('edit', groupId)
  }

  deleteGroup (groupId: string): void {
    console.log('dele', groupId)
  }

  showNewGroupModal (): void {
    this.$modal({
      component: ModalGroupForm,
      onOk: async (forms: FormsGroupLocation) => {
        try {
          this.loadingPage = false
          const group = await this.action_createGroup(forms.formGroup)
          console.log('crete group', group)

          // this.$notify.success(this.$t('notification.success', {
          //   noun: this.$t('nouns.theM'),
          //   resource: this.$tc('groups.num', 1),
          //   action: this.$t('notification.actions.created')
          // }))
        }
        catch (error) {
          this.$notify.error(this.$t('notification.error', {
            noun: (this.$t('nouns.theM') as string).toLowerCase(),
            action: (this.$t('actions.create') as string).toLowerCase(),
            resource: this.$tc('groups.num', 1).toLowerCase()
          }))
        }
        finally {
          this.loadingPage = false
        }
      }
    })
  }
}
