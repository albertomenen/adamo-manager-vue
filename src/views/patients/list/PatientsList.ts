import { Patient, PatientCreate, ApiRequest, ApiListResponse } from 'adamo-components'
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import AConfirmationModal from 'adamo-components/src/components/modals/confirmation-modal/AModalConfirmation.vue'
import AModalPatientForm from 'adamo-components/src/components/modals/patient-form-modal/AModalPatientForm.vue'

const patientsStore = namespace('patients')

@Component
export default class PatientsList extends Vue {

  /**
   * Datos de los pacientes
   */
  patients: Patient[] = []

  /**
   * Página actual del listado de pacientes
   */
  currentPage = 1

  /**
   * Número total de registros de pacientes
   */
  totalPatients = 0

  /**
   * Número total de páginas
   */
  totalPages = 0

  /**
   * Estado de carga de la tabla de pacientes
   */
  loadingPatients = false

  /**
   * Estado de carga de la página
   */
  loadingPage = false

  /**
   * Obtiene el listado de pacientes
   */
  @patientsStore.Action action_getPatients!: (params?: ApiRequest) => Promise<ApiListResponse<Patient>>

  /**
   * Crea un paciente
   */
  @patientsStore.Action action_createPatient!: (patientData: PatientCreate) => Promise<void>

  /**
   * Elimina un paciente
   */
  @patientsStore.Action action_deletePatient!: (id: string) => Promise<void>

  /**
  * Cambia el estado de edición de un paciente
  */
  @patientsStore.Mutation setPatientEditContext!: (context: boolean) => void


  /**
  * Establece la página actual del listado
  * @param page Número de página
  */
  setPage (page: number): void {
    this.currentPage = page
    this.getPatients()
  }

  /**
  * Hace la llamada para obtener el listado de pacientes
  * @param params Opciones de configuración
  */
  async getPatients (params?: ApiRequest): Promise<void> {
    try {
      this.loadingPatients = true
      const response = await this.action_getPatients({
        ...params,
        page: this.currentPage,
        size: 7
      })

      this.patients = response.data
      this.totalPatients = response.pagination.totalElements
      this.totalPages = response.pagination.pages
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: this.$i18n.tc('patients.num', 2)
      }))
    }
    finally {
      this.loadingPatients = false
    }
  }

  /**
  * Muestra la ventana de detalles de paciente
  * @param patientId id del paciente
  */
  showPatient (patientId: string): void {
    this.$router.push({
      name: 'patientDetails',
      params: { patientId: patientId }
    })
  }

  /**
  * Muestra la ventana de edición de paciente
  * @param patientId id del paciente
  */
  editPatient (patientId: string): void {
    this.setPatientEditContext(true)
    this.showPatient(patientId)
  }

  /**
  * Elimina un paciente
  * @param patientId id del paciente
  */
  async deletePatient (patientId: string): Promise<void> {

    this.$modal({
      component: AConfirmationModal,
      props: {
        description: this.$t('actions.confirmation', {
          action: (this.$t('actions.delete') as string).toLowerCase(),
          resource: this.$tc('patients.num', 1).toLowerCase()
        }),
        title: `${this.$t('actions.delete')} ${this.$tc('patients.num', 1)}`
      },
      onOk: async () => {
        try {
          this.loadingPage = true
          await this.action_deletePatient(patientId)
          this.$notify.success(this.$t('notification.success', {
            noun: this.$t('nouns.theM'),
            resource: this.$tc('patients.num', 1),
            action: this.$t('notification.actions.deleted')
          }))
          this.getPatients()
        }
        catch {
          this.$notify.error(this.$t('notification.error', {
            noun: (this.$t('nouns.theM') as string).toLowerCase(),
            action: (this.$t('actions.delete') as string).toLowerCase(),
            resource: this.$tc('patients.num', 1).toLowerCase()
          }))
        }
        finally {
          this.loadingPage = false
        }
      }
    })
  }

  showNewPatientModal (): void {
    this.$modal({
      component: AModalPatientForm,
      onOk: async (formData: PatientCreate) => {
        try {
          this.loadingPage = true
          await this.action_createPatient(formData)
          this.$notify.success(this.$t('notification.success', {
            noun: this.$t('nouns.theM'),
            resource: this.$tc('patients.num', 1),
            action: this.$t('notification.actions.created')
          }))
          this.getPatients()
        }
        catch {
          this.$notify.error(this.$t('notification.error', {
            noun: (this.$t('nouns.theM') as string).toLowerCase(),
            action: (this.$t('actions.create') as string).toLowerCase(),
            resource: this.$tc('patients.num', 1).toLowerCase()
          }))
        }
        finally {
          this.loadingPage = false
        }
      }
    })
  }

  mounted (): void {
    this.getPatients()
  }
}
