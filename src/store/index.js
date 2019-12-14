import Vue from "vue";
import Vuex from "vuex";
import Auth from './auth.js';
import New from './new.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	projects: [
  		{title:"Тайтл", description:"Lorem", geted: 152, total: 500},
  	],
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
    New
  }
});
