import { User } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    data: {
      type: Array as () => PropType<User[]>,
      default: () => []
    }
  }
})
export default class TableUsers extends Vue {

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
