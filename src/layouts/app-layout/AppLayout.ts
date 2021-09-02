import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class AppLayout extends Vue {

  open = true

  routeName: string | null | undefined = null

  created (): void {
    this.routeName = this.$route.name
  }

  @Watch('$route')
  onChangeRoute (): void {
    this.routeName = this.$route.name
  }
}
