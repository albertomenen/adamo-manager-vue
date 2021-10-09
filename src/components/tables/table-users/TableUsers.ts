import { User } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TableUsers extends Vue {

  @Prop({
    type: Array as () => PropType<User[]>,
    default: () => []
  }) data!: User

  showUser (user: User): void {
    this.$emit('user:show', user)
  }

  editUser (user: User): void {
    this.$emit('user:edit', user)
  }

  deleteUser (user: User): void {
    this.$emit('user:delete', user)
  }

  badgeColor (role: string) {
    switch (role) {
      case 'Practice Manager': return 'medium-blue'
      case 'MP': return 'blue'
      case 'NMP': return 'orange'
      default: return 'white'
    }
  }
}
