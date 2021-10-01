import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SearchBar extends Vue {
  @Prop({
    type: String,
    default: ''
  }) value!: string
}
