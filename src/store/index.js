import Vue from "vue";
import Vuex from "vuex";
import Auth from './auth.js'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	projects: [
  		{title:"Тайтл", description:"Lorem", geted: 152, total: 500},
  		{title:"Тайтл 2 ", description:"LoremLorem Lorem LoremLorem Lorem Lorem", geted: 444, total: 500},
  		{title:"Тайтл 3", description:"Lorem", geted: 152, total: 500}
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
