import { Group } from 'adamo-components'

export interface GroupsStateInterface {
  groups: Group[],
  isEditGroup: boolean,
  isEditLocation: boolean,
  idLocationEdit: string | null
}

const state: GroupsStateInterface = {
  groups: [],
  isEditGroup: false,
  isEditLocation: false,
  idLocationEdit: null
}

export default state
