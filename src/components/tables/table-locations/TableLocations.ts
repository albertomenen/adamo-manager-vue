import { Location } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TableLocations extends Vue {

  @Prop({
    type: Array as () => PropType<Location[]>,
    default: () => []
  })
  data!: Location[]
}
