import axios from 'axios';

const state = {
  auth: false,
  token: "",
  registerError: "",
  loginError: ""
};
 
const mutations = {
  updateToken: function(state, payload){
    axios.defaults.headers.common["Authorization"] = payload.to;
    localStorage.setItem('token', payload.to);
    state.token = payload.to;
    state.auth = true;
  },
  logout: function(state){
    console.log("a");
    state.auth = false;
    state.token = "";
    localStorage.setItem('token', "");
  }
};
const actions = {
  register: function ({commit}, payload) {
    commit("addLoading");
    let data = {"login": payload.login, "password": payload.password};
    return axios.post("/auth/register", data).then(
      (resp) => {
        commit("subLoading");
        if (resp.data.status){
          commit("updateToken", {"to": resp.data.token});
        } else {
          return resp.data;
        }
      }
    )
  },
  login: function({commit, state}, payload){
    commit("addLoading");
    let data = {"login": payload.login, "password": payload.password};
    return axios.post("/auth/login", data).then(
      (resp) => {
        commit("subLoading");
        if (resp.data.status){
          commit("updateToken", {"to": resp.data.token});
        } else {
          return resp.data;
        }
      }
    )
  },
  logout: function({commit}) {
    commit("addLoading");
    axios.post("/auth/logout").then(
      (resp) => {
        commit("subLoading");
        if (resp.data.status){
          commit("logout");
        }
      }
    )
  },
  checkToken: function({commit}){
    commit("addLoading");
    let token = localStorage.getItem("token") || "";
    if (token == 0){
      commit("logout");
    } else {
      commit("updateToken", {to: token});
    }
    commit("subLoading");
  },
  //login: function({co})

};
const getters = {

};

export default {
  state,
  getters,
  actions,
  mutations
}