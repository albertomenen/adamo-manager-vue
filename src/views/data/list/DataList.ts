import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {
    TabsUsers: () => import('@/views/data/tabs/users/TabsUsers.vue'),
    TabsDevices: () => import('@/views/data/tabs/devices/TabsDevices.vue')
  }
})
export default class DataList extends Vue {

  tab = 0

  loadingPage = false

  created (): void {
    if (this.$route.name === 'dataDevices') {
      this.tab = 1
    }
  }

  @Watch('tab')
  onChangeTab (value: number): void {
    switch (value) {
      case 0:
        this.$router.replace({
          name: 'dataUsers'
        })
        break

      case 1:
        this.$router.replace({
          name: 'dataDevices'
        })
        break
    }
  }
}
