import axios from 'axios';
import store from '../store';

const state = {
    projects: [],
    current: {}, 
    last: 0,
    coord: [],
    tags: [],

};
 
const actions = {
  getProjectsPage: function({state, commit}){
    commit("addLoading");
    axios.post("/getposts", {page: state.last}).then(
      (resp) => {
        if (resp.data.length!=0){
          for (let i in resp.data){
            state.projects.push(resp.data[i]);
          }
        }
        commit("subLoading");
      }
    )
  },
  getProjectsFiltred: function({state, dispatch, commit}, payload){
    let data = {};
    if (state.coord.length!=0){data.coord = state.coord};
    if (payload.tags.length!=0){data.tags = payload.tags};
    if (!data.coord && !data.tags){
      dispatch("discard");
      dispatch("getProjectsPage");
      return;
    }
    commit("addLoading");
    dispatch("discard");
    axios.post("/getposts", data).then(
      (resp) => {
        if (resp.data.length!=0){
          for (let i in resp.data){
            state.projects.push(resp.data[i]);
          }
        }
        commit("subLoading");
      }
    )
  },
  getTags: function({state}){
    axios.get("/tags").then(
      (resp) => { 
        state.tags = [];
        for (let i in resp.data){
          state.tags.push(resp.data[i].tag);
        };
      }
    )
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
    //state.tags = [];
    state.projects = [];
  },
  updateCoord: function({state}, payload){
    state.coord = payload.coord;
  },
};
const getters = {

};

export default {
  state,
  getters,
  actions
}