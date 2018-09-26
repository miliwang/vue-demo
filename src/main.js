import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
Vue.config.productionTip = false



const app = new Vue({
  name: 'root',
  router: router,
  render: h => h(App)
})

/**
 * Mount to `#app` element
 */

app.$mount('#app')