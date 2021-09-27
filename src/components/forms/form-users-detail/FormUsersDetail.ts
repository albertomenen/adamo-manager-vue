import { User } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const userStore = namespace('users')

@Component
export default class FormUsersDetail extends Vue {

  @Prop({
    type: Object as () => PropType<User>
  })
  user!: User

  @userStore.Mutation setEditing
  @userStore.Getter isEditing!: boolean

  beforeDestroy () {
    this.setEditing(false)
  }
}
