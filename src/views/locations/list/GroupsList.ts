import { ApiListResponse, ApiRequest, Group, Location, Filter } from 'adamo-components'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { FormsGroupLocation, GroupCreate } from '@/models/group.model'
import { debounce } from 'debounce'

import ModalGroupForm from '@/components/modals/modal-group-form/ModalGroupForm.vue'
import AConfirmationModal from 'adamo-components/src/components/modals/confirmation-modal/AModalConfirmation.vue'

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

  filtersObject: Filter<Group>[] = []

  filterSearch = ''
  filterTown = ''
  filterCity = ''

  swapFilterValue (field: keyof Group, value: any) {
    const index = this.filtersObject.findIndex(element => element.field === field)
    index !== -1 && this.filtersObject.splice(index, 1)
    this.filtersObject.push({ field, op: 'contains', value })
    this.getGroups()
  }

  @Watch('filterSearch')
  onFilterSearchChange = debounce((value) => this.swapFilterValue('group_name', value), 500)

  @Watch('filterTown')
  onFilterTownChange = debounce((value) => this.swapFilterValue('town', value), 500)

  @Watch('filterCity')
  onFilterCityChange = debounce((value) => this.swapFilterValue('city', value), 500)

  @groupsStore.Action action_getGroups!: (params?: ApiRequest) => Promise<ApiListResponse<Group>>

  @groupsStore.Action action_createGroup!: (groupData: GroupCreate) => Promise<Group>

  @groupsStore.Action action_createLocation!: ({ groupId, formLocation }) => Promise<Location>

  @groupsStore.Action action_deleteGroup!: (groupId: string) => Promise<void>

  @groupsStore.Mutation setGroupEditContext!: (context: boolean) => void


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
        size: 7,
        filters: this.filtersObject
      })

      this.groups = data
      this.totalGroups = pagination.totalElements
      this.totalPages = pagination.pages
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: this.$i18n.tc('groups.num', 2)
      }))
    }
    finally {
      this.loadingGroups = false
    }
  }

  showGroup (groupId: string): void {
    this.$router.push({
      name: 'groupDetail',
      params: {
        groupId
      }
    })
  }

  editGroup (groupId: string): void {
    this.setGroupEditContext(true)
    this.showGroup(groupId)
  }

  async deleteGroup (groupId: string): Promise<void> {
    this.$modal({
      component: AConfirmationModal,
      props: {
        description: this.$t('actions.confirmation', {
          action: (this.$t('actions.delete') as string).toLowerCase(),
          resource: this.$tc('groups.num', 1).toLowerCase()
        }),
        title: `${this.$t('actions.delete')} ${this.$tc('groups.num', 1)}`
      },
      onOk: async () => {
        try {
          this.loadingPage = true
          await this.action_deleteGroup(groupId)
          this.$notify.success(this.$t('notification.success', {
            noun: this.$t('nouns.theM'),
            resource: this.$tc('groups.num', 1),
            action: this.$t('notification.actions.deleted')
          }))
          this.getGroups()
        } catch (error) {
          this.$notify.error(this.$t('notification.error', {
            noun: (this.$t('nouns.theM') as string).toLowerCase(),
            action: (this.$t('actions.delete') as string).toLowerCase(),
            resource: this.$tc('groups.num', 1).toLowerCase()
          }))
        }
        finally {
          this.loadingPage = false
        }
      }
    })
  }

  showNewGroupModal (): void {
    this.$modal({
      component: ModalGroupForm,
      onOk: async (forms: FormsGroupLocation) => {
        try {
          this.loadingPage = false
          const group = await this.action_createGroup(forms.formGroup)
          this.$notify.success(this.$t('notification.success', {
            noun: this.$t('nouns.theM'),
            resource: this.$tc('groups.num', 1),
            action: this.$t('notification.actions.created')
          }))

          await this.action_createLocation({
            groupId: group.id_group,
            formLocation: forms.formLocation
          })
          this.$notify.success(this.$t('notification.success', {
            noun: this.$t('nouns.theF'),
            resource: this.$tc('locations.num', 1),
            action: this.$t('notification.actions.created')
          }))

          this.getGroups()
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
