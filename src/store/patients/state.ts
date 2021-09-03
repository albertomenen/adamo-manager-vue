import { Patient } from 'adamo-components'

export interface PatientsStateInterface {
  patientSelected: Patient | null,
  patients: Patient[],
  isEditMode: boolean
}

const state: PatientsStateInterface = {
  patientSelected: null,
  patients: [],
  isEditMode: false
}

export default state
