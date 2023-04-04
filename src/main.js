import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "./assets/colors.css"
import "./assets/index.css"
import "./assets/fonts.css"
import "./library/OursideClick"

import router from "./library/router"
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
