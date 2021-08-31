import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import i18n from './i18n'

// CSS Imports
import 'buefy/dist/buefy.css'
import 'adamo-components/styles.scss'
import '@fortawesome/fontawesome-free/css/all.css'

// Component imports
import AdamoComponents from 'adamo-components'

// Component registration
Vue.use(Buefy)
Vue.use(AdamoComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
