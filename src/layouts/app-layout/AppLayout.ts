import { Component, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const groupsStore = namespace('groups')
const rolesStore = namespace('roles')

@Component
export default class AppLayout extends Vue {

  @groupsStore.Action action_getAllGroups
  @rolesStore.Action action_getAllRoles

  open = true

  routeName: string | null | undefined = null

  created (): void {
    this.routeName = this.$route.name
    this.action_getAllGroups()
    this.action_getAllRoles()
  }

  @Watch('$route')
  onChangeRoute (): void {
    this.routeName = this.$route.name
  }
}
