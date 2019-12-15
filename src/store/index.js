import Vue from "vue";
import Vuex from "vuex";
import Auth from './auth.js';
import New from './new.js';
import Projects from './projects.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: 0,
  },
  mutations: {
    addLoading: function(state){
      state.loading++;
    }, 
    subLoading: function(state){
      state.loading--;
    }, 
  },
  actions: {
  },
  modules: {
    Auth,
    New,
    Projects
  }
});
