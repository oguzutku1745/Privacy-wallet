
import devtools from '@vue/devtools'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { Localization } from './utils/localization'
import ToggleButton from 'vue-js-toggle-button'
import VTooltip from 'v-tooltip'
import '@/assets/scss/style.scss'

if (process.env.NODE_ENV === 'development' && process.env.VUE_APP_USE_VUE_DEV_TOOLS) {
  devtools.connect()
}

Vue.use(ToggleButton)
Vue.use(VTooltip)
Vue.config.productionTip = false
Vue.use(Localization)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

