import { AuthUser } from 'adamo-components'

export interface AuthStateInterface {
  authenticatedUser: AuthUser | null
  token: string | null
  reToken: string | null
}

const state: AuthStateInterface = {
  authenticatedUser: localStorage.user ? JSON.parse(localStorage.user) : null,
  token: localStorage.token ?? null,
  reToken: localStorage.reToken ?? null
}

export default state
