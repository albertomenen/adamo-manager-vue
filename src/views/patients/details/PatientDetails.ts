import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import PatientHistory from '@/views/patients/history/PatientHistory.vue'
import PatientInfo from '@/views/patients/info/PatientInfo.vue'
import { Patient } from 'adamo-components'

const patientsStore = namespace('patients')

@Component({
  components: {
    PatientHistory, PatientInfo
  }
})
export default class PatientDetails extends Vue {

  @patientsStore.Getter getPatientEditContext!: boolean
  @patientsStore.Mutation setPatientEditContext!: (context: boolean) => void
  @patientsStore.Action action_getPatient!: (data: Record<string, unknown>) => Promise<Patient>
  @patientsStore.Action action_updatePatient!: (patient: Patient) => Promise<void>

  tab = 0
  loadingPage = false
  patient: Patient | null = null

  cancelPatientUpdate (): void {
    this.setPatientEditContext(false)
  }

  async updatePatient (): Promise<void> {
    try {
      this.loadingPage = true
      await this.action_updatePatient(this.patient!)
      this.$notify.success(this.$t('notification.success', {
        noun: this.$t('nouns.theM'),
        resource: this.$tc('patients.num', 1),
        action: this.$t('notification.actions.updated')
      }))
    }
    catch (e) {
      this.$notify.error(this.$t('notification.error', {
        noun: (this.$t('nouns.theM') as string).toLowerCase(),
        action: (this.$t('actions.edit') as string).toLowerCase(),
        resource: this.$tc('patients.num', 1).toLowerCase()
      }))
    }
    finally {
      this.loadingPage = false
      this.setPatientEditContext(false)
    }
  }

  setLoadingState (state: boolean): void {
    this.loadingPage = state
  }

  async getPatientData (): Promise<void> {
    try {
      this.setLoadingState(true)
      this.patient = await this.action_getPatient({
        patientId: this.$route.params.patientId
      })
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: this.$tc('patients.num', 1)
      }))
    }
    finally {
      this.setLoadingState(false)
    }
  }

  created (): void {
    if (this.getPatientEditContext) {
      this.tab = 1
    }

    this.getPatientData()
  }

  beforeDestroy (): void {
    this.setPatientEditContext(false)
  }
}
