import { Patient } from 'adamo-components'
import moment from 'moment'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const patientsStore = namespace('patients')

@Component
export default class PatientInfo extends Vue {
  /**
   * Datos del paciente
   */
  @Prop({
    type: Object as () => PropType<Patient>
  }) data!: Patient

  /**
   * Datos del paciente para ser manejados localmente
   */
  patient!: Patient

  @patientsStore.Getter getPatientEditContext!: boolean
  @patientsStore.Mutation setPatientEditContext!: (context: boolean) => void

  get patientAge (): string {
    // obtener la fecha actual para comparar con la de nacimiento
    const today = moment()
    return `${today.diff(this.patient.birthdate, 'years')} ${this.$i18n.t('patients.age')}`
  }

  created (): void {
    this.patient = this.data
  }
}
