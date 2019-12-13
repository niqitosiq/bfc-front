<template lang="pug">
.oneProject
	gallery(:images='["images/example.jpg", "images/2.jpg", "images/example.jpg"]')
	.title
		| {{ title }}
	p {{ description }}
	.total
		.geted(:style="'transform: scaleX(' + procent/100 + ')'")
		.procent {{procent}}%
	.cifres
		| {{geted}}/{{total}} рублей
	.more Подробнее >>
	
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
.more
	text-decoration: underline
	color: $accent
	cursor: pointer
	margin-top: 20px
.total
	width: 100%
	height: 20px
	background-color: #ccc
	border-radius: 10px
	margin-bottom: 20px
	position: relative
	overflow: hidden
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
</style>





