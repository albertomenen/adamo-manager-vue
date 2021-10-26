/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import AModalObservations from 'adamo-components/src/components/modals/observations-modal/AModalObservations.vue'
import AModalThermographicImage from 'adamo-components/src/components/modals/thermographic-image-modal/AModalThermographicImage.vue'
import moment from 'moment'

import { Session, Treatment } from 'adamo-components'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { TranslateResult } from 'vue-i18n'
import { getEstimateFormat } from '@/utils/estimateUtils'

const treatmentsStore = namespace('treatments')

@Component
export default class TreatmentDetails extends Vue {
  session = 1
  loadingPage = false

  sessionSelected: Session | null | undefined = null

  treatment: Treatment | null = null

  @treatmentsStore.Action action_getTreatment!: (data) => Promise<Treatment>

  get formatInitialDate (): string {
    return moment(this.treatment?.ts_creation_date).format('DD/MM/YYYY')
  }

  get formatNextSchedule (): string | TranslateResult {
    return this.treatment?.ts_next_session
      ? moment(this.treatment?.ts_next_session).format('DD/MM/YYYY')
      : this.$i18n.t('treatments.withoutScheduling')
  }

  get formatSession (): string {
    return `${this.treatment?.current_session_number}/${this.treatment?.sessions_number}`
  }

  get treatmentMode (): string | TranslateResult {
    return this.$t('treatments.modes')[this.treatment!.mode] || ''
  }

  get formatDuration (): string {
    const { hours, minutes, seconds } = getEstimateFormat(this.treatment?.points!, this.treatment?.n_cycles!)
    return `${hours !== '00' ? hours + ':' : ''}${minutes}:${seconds}`
  }

  get formattedSessionDate (): string {
    return moment(this.sessionSelected?.ts_creation_date).format('DD/MM/YYYY')
  }

  get formatPressure (): string {
    return this.treatment?.points?.[0]
      ? `${this.treatment.points[0].pressure} P`
      : ''
  }

  get formatSessionNumber (): string | number {
    return this.sessionSelected?.session_number
      ? this.sessionSelected.session_number
      : ''
  }

  get formatTemperature () {
    switch (this.treatment?.temperature) {
      case 0: return this.$t('temperatures.low')
      case 1: return this.$t('temperatures.medium')
      case 2: return this.$t('temperatures.high')
    }
    return ''
  }

  get getInjury () {
    return this.treatment?.injury === 'True'
      ? `${this.treatment?.injury_kind} - ${this.treatment?.injury_cause}`
      : this.$t('noInjury')
  }

  get thermicImage (): string {
    const currentSession = this.treatment?.sessions[this.session - 1]
    return currentSession
      ? `data:image/png;base64,${this.treatment?.sessions[this.session - 1].image_thermic}`
      : ''
  }

  showObservationModal (): void {
    this.$modal({
      component: AModalObservations,
      props: {
        observations: this.treatment!.notes
      }
    })
  }

  async created (): Promise<void> {
    try {
      this.loadingPage = true
      this.treatment = await this.action_getTreatment({
        patientId: this.$route.params.patientId,
        treatmentId: this.$route.params.treatmentId
      })
      this.session = this.treatment.current_session_number
    }
    catch (error) {
      this.$notify.error(this.$i18n.t('notification.error', {
        action: this.$i18n.t('notification.actions.search'),
        resource: this.$i18n.tc('treatments.num', 1)
      }))
    }
    finally {
      this.loadingPage = false
    }
  }

  handleViewThermalImage (): void {
    this.$modal({
      component: AModalThermographicImage,
      props: {
        treatment: this.treatment,
        currentSession: this.session,
        points: this.treatment?.points
      }
    })
  }

  @Watch('session')
  onChangeSession (value: number): void {
    this.sessionSelected = this.treatment?.sessions
      ? this.treatment?.sessions
        .find(s => s.session_number === value)
      : null
  }
}
