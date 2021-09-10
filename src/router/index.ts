import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import guards from './guards'

// Importando rutas
import auth from './routes/auth'
import home from './routes/home'
import groups from './routes/groups'
import patients from './routes/patients'
import treatments from './routes/treatments'
import data from './routes/data'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  ...auth,
  ...home,
  ...groups,
  ...patients,
  ...treatments,
  ...data
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Guards de navegación
router.beforeEach(guards)

export default router
