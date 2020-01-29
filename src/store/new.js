import axios from 'axios';
import store from '../store';

const state = {
	dropzoneOptions: {
  		url: "http://127.0.0.1:5001/api/new/loadImages",
  		thumbnailWidth: 150,
  		dictDefaultMessage: "Загрузите изображения",
  		headers: {}
  	},
    room: -1,

};
 
const mutations = {
  
};
const actions = {
  generateNew: function ({state, commit}, payload) {
  	commit("addLoading");
  	axios.post("/new/generate_new").then(
  		(resp) => {
  			if (resp.data.status){
  				console.log(resp.data)
  				let data = { 
  					"Room-Allow": resp.data.id,
  					"Authorization": store.state.Auth.token
  				}
          state.room = resp.data.id;
  				state.dropzoneOptions.headers = data;
  				console.log(payload.this.$refs.myVueDropzone);
  				payload.this.$refs.myVueDropzone.setOption("headers", data);
  				//payload.this.$forceUpdate();
  				commit("subLoading");
  			}
  		}
  	)
  },
  sendData: function({state}, payload){
    let data = payload.data;
    data['id'] = state.room;
    return axios.post("/new/loadJson", payload.data).then(
        (resp) => {
          return {id: state.room}
        }
      )
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