import Vue from 'vue'
import App from './App'
import vuetify from './plugins/vuetify'
import router from './router/router'
import axios from 'axios'
import store from './store/store'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  el:'#app',
  vuetify,
  router: router,
  store: store,
  components: { App },
  template:'<App/>'
})
