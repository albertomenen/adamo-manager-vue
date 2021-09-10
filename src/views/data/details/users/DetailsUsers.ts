import { User } from 'adamo-components'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DetailsUsers extends Vue {

  tab = 0

  loadingPage = false

  user: User | null = null
}
