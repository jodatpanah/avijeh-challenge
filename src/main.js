import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "./assets/colors.css"
import "./assets/index.css"
import "./assets/fonts.css"
new Vue({
  render: h => h(App),
}).$mount('#app')
