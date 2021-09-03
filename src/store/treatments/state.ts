import { Treatment } from 'adamo-components'

export interface TreatmentsStateInterface {
  treatments: Treatment[],
  treatmentOffline: Treatment | null
}

const state: TreatmentsStateInterface = {
  treatments: [],
  treatmentOffline: null
}

export default state
