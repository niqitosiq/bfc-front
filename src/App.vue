<template lang="pug">
#app
	router-view
</template>
<script>
import svgi from "@/components/SvgIcon.vue";
import Vue from 'vue';
Vue.component("svgi", svgi);
	
export default {
  name: "App",
  created(){

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
	+below(1000px)
		width: 90%

</style>
