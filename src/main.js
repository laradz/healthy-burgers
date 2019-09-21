import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.headers.common['Accept'] = 'application/json'
//axios.defaults.headers.common['Authorization'] = 'Bearer XXXXX'
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
