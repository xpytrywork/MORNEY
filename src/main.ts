import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// 相当于import router from './router/index.ts'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
Vue.config.productionTip = false
Vue.component('Nav', Nav)
Vue.component('Layout', Layout)

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
