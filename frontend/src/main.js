import Vue from 'vue'
import app from './app.vue'
import {router} from './router'
import {store} from './store/store'
import './assets/styles/main.scss'
import './registerServiceWorker'
import './styles/styles.scss'
import Element from 'element-ui'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')


