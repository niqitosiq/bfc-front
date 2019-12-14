import Vue from "vue";
import Vuex from "vuex";
import Auth from './auth.js'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	projects: [
  		{title:"Тайтл", description:"Lorem", geted: 152, total: 500},
  	]
  },
  mutations: {},
  actions: {
  	getProjects(){
  		//console.log("a")
  	}
  },
  modules: {
    Auth,
  }
});
