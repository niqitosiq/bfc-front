import axios from 'axios';
import store from '../store';

const state = {
	coord: false,
  
    projects: [
      {title:"Тайтл", description:"aaaffsaa a hsahsa a a asafs a. aa a a a. a. a.a adafnsnn", geted: 152, total: 500, url: "1"},
    ],
    current: {
      title: "Тайтл",
      article: "FFFFFFFFFFF SAFLGKAKHGAJHTU IUHTIQNTQUWIOPCQPOЬЦ", 
      descr: "salfajsjfaskjfs",
      total: 3000,
      geted: 3000,
      images: ["1", "2", "3"],
      prim: "fsa1221vhjb2vbn52"
    }
};
 
const mutations = {
  updateCoord: function({state}, payload){
    state.coord = payload.coord;
  }
  
};
const actions = {
  getProjects: function({state}, payload){
    let tags = payload.tags;
    if (tags.length!=0){
      //axios.get()
    }
  },
  updateCurrent: function({state}, payload){

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