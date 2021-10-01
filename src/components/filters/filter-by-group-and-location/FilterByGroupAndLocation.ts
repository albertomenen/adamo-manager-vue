import { Group } from 'adamo-components'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const groupsStore = namespace('groups')

@Component({
  components: {
    FilterBase: () => import('@/components/filters/filter-base/FilterBase.vue')
  }
})
export default class FilterByGroupAndLocation extends Vue {
  @Prop({
    type: String,
    default: ''
  }) group!: string

  @Prop({
    type: String,
    default: ''
  }) location!: string

  @groupsStore.Getter getGroups!: Group[]

  get locations () {
    return this.getGroups.find(group => group.id_group === this.group)?.locations
  }
}
