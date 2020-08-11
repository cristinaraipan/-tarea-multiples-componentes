import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router';  // añadimos esta línea
Vue.config.productionTip = false
Vue.use(Vuex)
  
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
