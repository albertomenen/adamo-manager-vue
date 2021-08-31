import { RouteConfig } from 'vue-router'

const homeRoutes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'login' }
  }
]

export default homeRoutes
