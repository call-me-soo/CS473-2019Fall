import Vue from 'vue'
import Home from './views/Home.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'

Vue.config.productionTip = false;

new Vue({
  el:'#home',
  vuetify,
  router: router,
  components: { Home },
  template:'<Home/>',
  render: h => h(Home)
})
// new Vue({
//   vuetify,
//   router: router,
//   render: h => h(Home)
// }).$mount('#home')