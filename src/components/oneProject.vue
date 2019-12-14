<template lang="pug">
.oneProject
	gallery(:images='["images/example.jpg", "images/2.jpg", "images/example.jpg"]')
	.descr
		h3.title {{ title }}
		p {{ description }}
		.total
			.geted(:style="'transform: scaleX(' + procent/100 + ')'")
			.procent {{procent}}%
		.cifres
			| {{geted}}/{{total}} рублей
		.more 
			//span Подробнее 
			svgi(name="more")
	
</template>

<script>
import gallery from "@/components/Gallery.vue";

export default {
  name: "oneProject",
  components: {
  	gallery,
  },
  props: {
  	title: String,
  	description: String,
  	total: Number,
  	geted: Number,
  },
  data: function(){
  	return {

  	}

  },
  computed: {
  	procent: function () {
  		return Math.round(this.geted/this.total*100);
  	}
  },
  methods: {

  }
};
</script>
<style lang="sass" scoped>
@import "@/assets/sass/all";
.oneProject
	width: 310px
	margin-bottom: 40px
	background: #f7f5f5
	border-radius: 10px
	overflow: hidden
	position: relative
	+below(1000px)
		width: 32%
	+below(720px)
		width: 49%
	+below(480px)
		width: 100%
.title
	font-weight: bold
	margin-top: 10px
	margin-bottom: 10px
	color: $accent
.more
	cursor: pointer
	background: $accent
	width: 100px
	border-radius: 60px
	height: 100px
	position: absolute
	right: 0
	bottom: 0
	transform: translate(25%, 35%)
	svg
		color: #fff
		font-size: 24px
		margin-top: 25px
		margin-left: 25px

.total
	width: 100%
	height: 25px
	background-color: #ccc
	border-radius: 10px
	margin-bottom: 20px
	position: relative
	overflow: hidden
.descr
	padding-left: 20px
	padding-right: 20px
	padding-top: 10px
	padding-bottom: 50px
.geted
	width: 100%
	height: 100%
	position: absolute
	left: 0
	top: 0
	background: $accent
	transform-origin: left center
.procent
	z-index: 3
	position: absolute
	left: 50%
	transform: translateX(-50%)
	font-weight: bold
	color: #000
.cifres
	margin-top: 0
</style>





