import axios from 'axios';
import store from '../store';

const state = {
	coord: false,
    projects: [],
    current: {
    }, 
    tags: {

    },
    last: 0,
};
 
const mutations = {
  updateCoord: function({state}, payload){
    state.coord = payload.coord;
  },
};
const actions = {
  getProjects: function({state, commit}, payload){
    commit("addLoading");
    if (payload.tags.length!=0 && payload.tags){
      state.tags = payload.tags;
      axios.post("/getposts", {filter: 'tags', tags: payload.tags, page: state.last}).then(
        (resp) => {
          if (resp.data.length!=0){
            for (let i in resp.data){
              state.projects.push(resp.data[i]);
            }
          }
          commit("subLoading");

        }
      )
    } else {
      axios.post("/getposts", {filter: 'all', page: state.last}).then(
        (resp) => {
          if (resp.data.length!=0){
            for (let i in resp.data){
              state.projects.push(resp.data[i]);
            }
            
          }
          commit("subLoading");
        }
      )
    }
  },
  updateCurrent: function({state, commit}, payload){
    commit("addLoading");
    axios.get("/post?id="+payload.id).then(
      (resp) => {
        state.current = resp.data;
        commit("subLoading");
      })
  },
  more: function({state, dispatch}){
    state.last++;
    dispatch("getProjects", {tags: state.tags});
  },
  discard: function({state}){
    state.last = 0;
    state.tags = [];
    state.projects = [];
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