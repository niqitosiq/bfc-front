<template lang="pug">
#app
	Header
	router-view
	Modals
	Loading( 
		:active.sync="this.$store.state.loading>0" 
        :can-cancel="false"
        color="#0070c0"
    )
</template>
<script>
import svgi from "@/components/SvgIcon.vue";
import Header from "@/components/fullHeader.vue"
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import store from './store';
import VModal from 'vue-js-modal';
import Modals from '@/components/Modals.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import YmapPlugin from 'vue-yandex-maps'


const yasettings = {
  apiKey: '8ab5f113-a962-4f63-8250-d9d48828b332',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}
Vue.use(YmapPlugin, yasettings)
Vue.use(VModal)
Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 700,
  }
});
require('vue-flash-message/dist/vue-flash-message.min.css');

Vue.component("svgi", svgi);
	
export default {
  name: "App",
  created(){
  	store.dispatch("checkToken");
  },
  components: {
  	Header,
  	Modals,
  	Loading
  }
};

</script>
<style lang="sass">
@import "@/assets/sass/all";
@import 'node_modules/normalize-scss/sass/normalize';
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
+normalize()



*
	font-family: Roboto
h1,h2
	font-weight: 600
.container
	display: flex
	width: 960px
	margin: 0 auto
	justify-content: space-between
	align-items: center
	min-width: 260px
	&.row
		flex-direction: column
		align-items: flex-start
		justify-content: flex-start
	+below(1000px)
		width: 90%
	+below(720px)
		flex-direction: column
		align-items: flex-start

</style>
