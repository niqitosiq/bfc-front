const state = {
  auth: false,
  token: "a"
};
 
const mutations = {
  updateToken: function(state, payload){
    state.token = payload.to;
  }

};
const actions = {
  setToken: function ({state, commit}) {
    commit("updateToken", {to: "b"});
    console.log("AAAAA");
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