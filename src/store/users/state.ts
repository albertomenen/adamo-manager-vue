import { UserList } from 'adamo-components'

export interface UserStateInterface {
  users: UserList[]
}

const state: UserStateInterface = {
  users: []
}

export default state
