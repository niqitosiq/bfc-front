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
    console.log("B")
    state.auth = false;
    state.token = "";
  }
};
const actions = {
  register: function ({commit}, payload) {
    let data = {"login": payload.login, "password": payload.password};
    return axios.post("/auth/register", data).then(
      (resp) => {
        if (resp.data.status){
          commit("updateToken", {"to": resp.data.token});
        } else {
          return resp.data;
        }
      }
    )
  },
  login: function({commit, state}, payload){
    let data = {"login": payload.login, "password": payload.password};
    return axios.post("/auth/login", data).then(
      (resp) => {
        if (resp.data.status){
          commit("updateToken", {"to": resp.data.token});
        } else {
          return resp.data;
        }
      }
    )
  },
  checkToken: function({commit}){
    let token = localStorage.getItem("token") || 0;
    if (token == 0){
      commit("logout");
    }
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