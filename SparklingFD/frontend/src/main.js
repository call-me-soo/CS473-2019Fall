import Vue from 'vue'
import App from './App'
import vuetify from './plugins/vuetify'
import router from './router/router'

Vue.config.productionTip = false;

new Vue({
  el:'#app',
  vuetify,
  router: router,
  components: { App },
  template:'<App/>'
})
