import { Component, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const groupsStore = namespace('groups')
const rolesStore = namespace('roles')
const authStore = namespace('auth')

@Component
export default class AppLayout extends Vue {

  @groupsStore.Action action_getAllGroups
  @rolesStore.Action action_getAllRoles
  @authStore.Getter hasPermission!: (permission: string) => boolean

  open = true

  routeName: string | null | undefined = null

  created (): void {
    this.routeName = this.$route.name
    if (this.hasAccessToDataTab) {
      this.action_getAllGroups()
      this.action_getAllRoles()
    }
  }

  @Watch('$route')
  onChangeRoute (): void {
    this.routeName = this.$route.name
  }

  get hasAccessToDataTab () {
    return this.hasPermission('manage_dev')
    || this.hasPermission('manage_mp')
    || this.hasPermission('manage_nmp')
    || this.hasPermission('manage_sysadmin')
    || this.hasPermission('manage_practice_manager')
  }
}
