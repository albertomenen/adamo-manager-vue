import { User } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FormUsersDetail extends Vue {

  @Prop({
    type: Object as () => PropType<User>
  })
  user!: User
}
