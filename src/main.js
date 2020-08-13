import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router';  // añadimos esta línea
Vue.config.productionTip = false
Vue.use(Vuex)
  
/* let store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
}); */
let store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'The Hangover', genre: 'Comedy' },
      { id: 2, title: 'I Love You Man', genre: 'Comedy' },
      { id: 3, title: 'Scary Movie', genre: 'Comedy' },
      { id: 4, title: 'Toy Story', genre: 'Family' },
      { id: 5, title: 'Cars', genre: 'Family' },
      { id: 6, title: 'The Secret Life of Pets', genre: 'Family' },
    ]
  },
  // more stuff will go here later


});

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
