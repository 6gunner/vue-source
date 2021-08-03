import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './moduleA';
import moduleB from './moduleB';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h('span', 'hello vuex')
  
})