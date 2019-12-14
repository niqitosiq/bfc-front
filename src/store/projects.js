import axios from 'axios';
import store from '../store';

const state = {
	coord: false,
};
 
const mutations = {
  updateCoord: function({state}, payload){
    state.coord = payload.coord;
  }
  
};
const actions = {
  getProjects: function({state}, payload){
    tags = payload.tags;
    if (tags.length!=0){
      //axios.get()
    }
  }
};
const getters = {

};

export default {
  state,
  getters,
  actions,
  mutations
}