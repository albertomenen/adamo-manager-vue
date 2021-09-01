import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import guards from './guards'

// Importando rutas
import auth from './routes/auth'
import spaces from './routes/spaces'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  ...auth,
  ...spaces
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Guards de navegación
router.beforeEach(guards)

export default router
