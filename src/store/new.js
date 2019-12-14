import axios from 'axios';
import store from '../store';

const state = {
	dropzoneOptions: {
  		url: "http://192.168.43.232:5001/api/new/loadImages",
		thumbnailWidth: 150,
		dictDefaultMessage: "Загрузите изображения",
		headers: {}
  	}

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
  				state.dropzoneOptions.headers = data;
  				console.log(payload.this.$refs.myVueDropzone);
  				payload.this.$refs.myVueDropzone.setOption("headers", data);
  				//payload.this.$forceUpdate();
  				commit("subLoading");
  			}
  		}
  	)
  },
};
const getters = {

};

export default {
  state,
  getters,
  actions,
  mutations
}