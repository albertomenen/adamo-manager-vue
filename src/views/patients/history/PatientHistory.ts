import { Treatment, TreatmentStatus } from 'adamo-components'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import AModalConfirmation from 'adamo-components/src/components/modals/confirmation-modal/AModalConfirmation.vue'

const treatmentsStore = namespace('treatments')
const authStore = namespace('auth')


@Component
export default class PatientHistory extends Vue {

  /**
   * Datos de los tratamientos de los pacientes
   */
  @Prop({
    type: Array as () => PropType<Treatment[]>,
    default: () => []
  }) treatments!: Treatment[]

  /**
   * Tratamiento actualmente seleccionado
   */
  selectedTreatment: Treatment | null = null

  /**
   * Página actual del listado de tratamientos
   */
  currentPage = 1

/**
 * Elimina un tratamiento
 */
  @treatmentsStore.Action action_deleteTreatment!: (data) => Promise<void>
  @authStore.Getter getUserPermissions

  /**
   * Muestra los tratamientos paginados
   */
  get paginatedTreatments (): Treatment[] {
    return this.treatments.slice((this.currentPage - 1) * 7, this.currentPage * 7)
  }

  /**
   * Decide si mostrar la paginación
   */
  get showPagination (): boolean {
    return this.treatments.length > 7
  }

  get canStartSession (): boolean {
    return this.selectedTreatment
      ? this.selectedTreatment.state !== TreatmentStatus.Canceled
      : false
  }

  /**
   *
   * @param page Modifica la página actual de la tabla
   */
  setPage (page: number): void {
    this.currentPage = page
  }

  /**
   * Lleva a la lista de tratamiento de sesión
   */
  startTreatmentSession (): void {
    this.selectedTreatment && this.$router.push({
      name: 'treatmentStart',
      params: {
        patientId: this.$route.params.patientId,
        treatmentId: this.selectedTreatment.id_treatment
      }
    })
  }

  /**
  * Muestra la ventana de detalles de tratamiento
  * @param treatmentId id del tratamiento
  */
  showTreatment (treatmentId: string): void {
    this.$router.push({
      name: 'treatmentDetails',
      params: {
        patientId: this.$route.params.patientId,
        treatmentId: treatmentId
      }
    })
  }

 /**
  * Muestra la ventana de edición de tratamiento
  * @param treatmentId id del tratamiento
  */
  editTreatment (treatmentId: string): void {
    const selected = this.treatments.filter(t => t.id_treatment === treatmentId)

    if (selected[0].mode === 'auto') {
      this.$router.push({
        name: 'treatmentsAutoEdit',
        params: {
          patientId: this.$route.params.patientId,
          treatmentId: treatmentId
        }
      })
    }
    else {
      this.$router.push({
        name: 'treatmentManualEdit',
        params: {
          patientId: this.$route.params.patientId,
          treatmentId: treatmentId
        }
      })
    }
  }

 /**
  * Elimina un tratamiento
  * @param treatmentId id del tratamiento
  */
  async deleteTreatment (treatmentId: string): Promise<void> {
    this.$modal({
      component: AModalConfirmation,
      onOk: async () => {
        try {
          this.$emit('loading', true)
          await this.action_deleteTreatment({
            treatmentId,
            patientId: this.$route.params.patientId

          })
          this.$notify.success(this.$t('notification.success', {
            noun: this.$t('nouns.theM'),
            resource: this.$tc('treatments.num', 1),
            action: this.$t('notification.actions.deleted')
          }))
          this.$emit('update')
        }
        catch {
          this.$emit('loading', false)
          this.$notify.error(this.$t('notification.error', {
            noun: (this.$t('nouns.theM') as string).toLowerCase(),
            action: (this.$t('actions.delete') as string).toLowerCase(),
            resource: this.$tc('treatments.num', 1).toLowerCase()
          }))
        }
      }
    })
  }
}
