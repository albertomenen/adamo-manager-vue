import { NavigationGuardNext, Route } from 'vue-router'
import store from '@/store/index'

export default function (to: Route, from: Route, next: NavigationGuardNext): void {

  // Guard de autenticación
  if (to.matched.some(record => record.meta.requiresAuth)) {

    const token = store.getters['auth/getToken']
    if (!token) {
      store.commit('auth/REMOVE_SESSION')
      next({ name: 'login' })
    }
    else {
      next()
    }
  }
  // Sucede si no necesita autenticacion
  else {
    next()
  }
}
