import { Filter } from 'adamo-components'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { debounce } from 'debounce'

type UserAndDeviceFilter = {
  id_group: string
  id_location: string
  id_room: string
  name: string
}

@Component({
  components: {
    TabsUsers: () => import('@/views/data/tabs/users/TabsUsers.vue'),
    TabsDevices: () => import('@/views/data/tabs/devices/TabsDevices.vue'),
    SearchBar: () => import('@/components/search-bar/SearchBar.vue'),
    FilterByGroupAndLocation: () => import('@/components/filters/filter-by-group-and-location/FilterByGroupAndLocation.vue')
  }
})
export default class DataList extends Vue {

  tab = 0
  loadingPage = false
  filterGroup = ''
  filterLocation = ''
  filterSearch = ''

  filtersObject: Filter<UserAndDeviceFilter>[] = []


  swapFilterValue (field: keyof UserAndDeviceFilter, op, value: any) {
    const index = this.filtersObject.findIndex(element => element.field === field)
    index !== -1 && this.filtersObject.splice(index, 1)
    value && this.filtersObject.push({ field, op, value })
  }

  @Watch('filterSearch')
  onFilterSearchChange = debounce((value) => this.swapFilterValue('name', 'contains', value), 300)

  @Watch('filterGroup')
  onFilterGroupChange = (value) => this.swapFilterValue('id_group', 'equal', value)

  @Watch('filterLocation')
  onFilterLocationChange = (value) => this.swapFilterValue('id_location', 'equal', value)

  created (): void {
    if (this.$route.name === 'dataDevices') {
      this.tab = 1
    }
  }

  @Watch('tab')
  onChangeTab (value: number): void {
    this.filterSearch = ''
    this.filterLocation = ''
    this.filterGroup = ''

    this.filtersObject = []
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
