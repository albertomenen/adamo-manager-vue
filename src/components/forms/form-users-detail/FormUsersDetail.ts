import { ApiListResponse, Group, User } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const userStore = namespace('users')
const groupsStore = namespace('groups')

@Component
export default class FormUsersDetail extends Vue {

  @Prop({
    type: Object as () => PropType<User>,
    required: true
  })
  user!: User

  groups: Group[] = []

  loadingGroups = false
  isEditingRegisterInfo = false

  get currentGroup () {
    return this.user.id_group
  }

  @Watch('currentGroup')
  onCurrentGroupChange () {
    this.user.id_location = ''
  }

  get locations () {
    return this.groups.find(o => o.id_group === this.currentGroup)?.locations
  }

  @groupsStore.Action action_getGroups!: () => Promise<ApiListResponse<Group>>


  async created () {
    this.loadingGroups = true
    const groups = await this.action_getGroups()
    this.groups = groups.data
    this.loadingGroups = false
  }

  @userStore.Mutation setEditing
  @userStore.Getter isEditing!: boolean

  setEditingRegisterInfo (value: boolean) {
    this.isEditingRegisterInfo = value
  }

  beforeDestroy () {
    this.setEditing(false)
  }
}
