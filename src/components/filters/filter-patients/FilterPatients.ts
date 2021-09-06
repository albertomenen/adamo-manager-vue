import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    FilterBase: () => import('@/components/filters/filter-base/FilterBase.vue')
  }
})
export default class FilterPatients extends Vue {}
