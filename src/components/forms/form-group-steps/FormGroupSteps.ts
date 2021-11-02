import { GroupCreate, LocationCreate } from '@/models/group.model'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
    FormGroupInfo: () => import('@/components/forms/form-group-info/FormGroupInfo.vue'),
    FormLocationInfo: () => import('@/components/forms/form-location-info/FormLocationInfo.vue')
  }
})
export default class FormGroupSteps extends Vue {

  @Prop({
    type: Object as () => PropType<GroupCreate>,
    default: () => ({})
  }) formGroup!: GroupCreate;

  @Prop({
    type: Object as () => PropType<GroupCreate>,
    default: () => ({})
  }) formLocation!: LocationCreate;

  @Prop({ type: Boolean }) fillWithGroup!: boolean;

  activeStep = 0

  get isFormValid () {
    if (this.activeStep === 0) return true

    const groupData = { ...this.formGroup }
    delete groupData.logo

    return ![...Object.values(groupData), ...Object.values(this.formLocation)].some(o => !o)
  }

  nextStep (handler: () => void): void {
    this.activeStep === 1
      ? this.$emit('submit')
      : handler()
  }

  previousStep (handler: () => void): void {
    handler()
  }
}
