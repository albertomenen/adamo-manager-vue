import { Group } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
    TableLocations: () => import('@/components/tables/table-locations/TableLocations.vue')
  }
})
export default class TableGroups extends Vue {

  @Prop({
    type: Array as () => PropType<Group[]>,
    default: () => []
  })
  data!: Group[]

  showGroup (group: Group): void {
    this.$emit('group:show', group.id_group)
  }

  editGroup (group: Group): void {
    this.$emit('group:edit', group.id_group)
  }

  deleteGroup (group: Group): void {
    this.$emit('group:delete', group.id_group)
  }
}
