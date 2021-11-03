import { LocationCreate } from '@/models/group.model'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FormLocationInfo extends Vue {

  @Prop({ type: Boolean }) fillWithGroup!: boolean;
  @Prop({ type: Boolean, default: true }) withGroup!: boolean;

  @Prop({
    type: Object as () => PropType<LocationCreate>,
    default: () => ({})
  }) formData!: LocationCreate


  handleCreate (): void {
    this.$emit('save', this.formData)
  }
}
