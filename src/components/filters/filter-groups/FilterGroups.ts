import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
    FilterBase: () => import('@/components/filters/filter-base/FilterBase.vue')
  }
})
export default class FilterGroups extends Vue {
  @Prop({
    type: String,
    default: ''
  }) city!: string

  @Prop({
    type: String,
    default: ''
  }) town!: string
}
