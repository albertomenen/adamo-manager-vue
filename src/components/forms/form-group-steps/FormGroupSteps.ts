import { GroupCreate, LocationCreate } from '@/models/group.model'
import { PropType } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    FormGroupInfo: () => import('@/components/forms/form-group-info/FormGroupInfo.vue'),
    FormLocationInfo: () => import('@/components/forms/form-location-info/FormLocationInfo.vue')
  },
  props: {
    formGroup: {
      type: Object as () => PropType<GroupCreate>,
      default: () => ({})
    },
    formLocation: {
      type: Object as () => PropType<LocationCreate>,
      default: () => ({})
    }
  }
})
export default class FormGroupSteps extends Vue {

  activeStep = 0

  nextStep (handler: () => void): void {
    this.activeStep === 1
      ? this.$emit('submit')
      : handler()
  }

  previousStep (handler: () => void): void {
    handler()
  }
}
