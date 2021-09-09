import { Group, Location } from 'adamo-components'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import ModalLocationForm from '@/components/modals/modal-location-form/ModalLocationForm.vue'
import { LocationCreate } from '@/models/group.model'

const groupsStore = namespace('groups')

@Component({
  components: {
    InfoGroup: () => import('@/views/groups/info/group/InfoGroup.vue'),
    InfoLocations: () => import('@/views/groups/info/locations/InfoLocations.vue')
  }
})
export default class GroupDetails extends Vue {

  tab = 0

  loadingPage = false

  group: Group | null = null

  @groupsStore.Getter getGroupEditContext!: boolean

  @groupsStore.Getter getLocationEditContext!: boolean

  @groupsStore.Getter getIdLocationEdit!: string

  @groupsStore.Mutation setGroupEditContext!: (context: boolean) => void

  @groupsStore.Mutation setLocationEditContext!: (context: boolean) => void

  @groupsStore.Action action_getGroup!: (groupId: unknown) => Promise<Group>

  @groupsStore.Action action_updateGroup!: (formGroup: Group) => Promise<Group>

  @groupsStore.Action action_updateLocation!: ({ groupId, formLocation }) => Promise<Location>

  @groupsStore.Action action_createLocation!: ({ groupId, formLocation }) => Promise<Location>

  created (): void {
    this.getGroupData()
  }

  beforeDestroy (): void {
    this.setGroupEditContext(false)
    this.setLocationEditContext(false)
  }

  async getGroupData (): Promise<void> {
    try {
      this.loadingPage = true
      this.group = await this.action_getGroup({
        groupId: this.$route.params.groupId
      })
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: this.$tc('groups.num', 1)
      }))
    }
    finally {
      this.loadingPage = false
    }
  }

  async updateGroup (): Promise<void> {
    try {
      this.loadingPage = true
      await this.action_updateGroup(this.group!)
      this.$notify.success(this.$t('notification.success', {
        noun: this.$t('nouns.theM'),
        resource: this.$tc('groups.num', 1),
        action: this.$t('notification.actions.updated')
      }))
      this.getGroupData()
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('actions.edit').toString().toLowerCase(),
        resource: this.$tc('groups.num', 1)
      }))
    }
    finally {
      this.loadingPage = false
      this.setGroupEditContext(false)
    }
  }

  async updateLocation (): Promise<void> {
    try {
      this.loadingPage = true
      await this.action_updateLocation({
        groupId: this.group?.id_group,
        formLocation: this.group?.locations?.find(l => l.id_location === this.getIdLocationEdit)
      })
      this.$notify.success(this.$t('notification.success', {
        noun: this.$t('nouns.theM'),
        resource: this.$tc('locations.num', 1),
        action: this.$t('notification.actions.updated')
      }))
      this.getGroupData()
    } catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('actions.edit').toString().toLowerCase(),
        resource: this.$tc('locations.num', 1)
      }))
    }
    finally {
      this.loadingPage = false
      this.setLocationEditContext(false)
    }
  }

  handleNewLocation (): void {
    this.$modal({
      component: ModalLocationForm,
      onOk: async (formLocation: LocationCreate) => {
        try {
          this.loadingPage = true
          await this.action_createLocation({
            groupId: this.group?.id_group,
            formLocation
          })
          this.$notify.success(this.$t('notification.success', {
            noun: this.$t('nouns.theF'),
            resource: this.$tc('locations.num', 1),
            action: this.$t('notification.actions.created')
          }))
          this.getGroupData()
        }
        catch (error) {
          this.$notify.error(this.$t('notification.error', {
            noun: (this.$t('nouns.theM') as string).toLowerCase(),
            action: (this.$t('actions.delete') as string).toLowerCase(),
            resource: this.$tc('locations.num', 1).toLowerCase()
          }))
        }
        finally {
          this.loadingPage = false
        }
      }
    })
  }

  cancelGroupUpdate (): void {
    this.setGroupEditContext(false)
  }

  cancelLocationUpdate (): void {
    this.setLocationEditContext(false)
  }
}
