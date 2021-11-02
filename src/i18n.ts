import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'
import './utils/vee-validate'

Vue.use(VueI18n)

function loadLocaleMessages (): LocaleMessages {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages: LocaleMessages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: localStorage.appLocale || process.env.VUE_APP_I18N_LOCALE || 'es',
  fallbackLocale: localStorage.appLocale || process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'es',
  messages: loadLocaleMessages()
})
