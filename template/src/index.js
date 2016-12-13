import Vue from 'vue'
import App from './App'
import router from './routes'

const app = new Vue({
  router,
  render: h => h(App)
})

app.$mount('#app')
