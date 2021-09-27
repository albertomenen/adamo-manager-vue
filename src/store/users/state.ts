import { UserList } from 'adamo-components'

export interface UserStateInterface {
  users: UserList[]

  isEditing: boolean
}

const state: UserStateInterface = {
  users: [],
  isEditing: false
}

export default state
