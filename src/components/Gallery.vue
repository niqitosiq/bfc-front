<template lang="pug">

.gallery(:class="{lg: large}")
	.prev.arrow(@click="prev()")
		svgi(name="arrow")
	.wrapper
		img(v-for="item, index in localImages" :src="item" :class="{active: index===activeSlide}")

	.next.arrow(@click="next()")
		svgi(name="arrow")
</template>

<script>
//import  from "@/components/.vue";

export default {
  name: "gallery",
  components: {
    
  },
  props: {
  	images: {type: Array},
  	large: {type: Boolean, default: false},
  },
  data: function(){
  	return {
  		localImages: [],
  		activeSlide: 0,
  	}
  },
  methods: {
  	next(){
  		if (this.activeSlide+1<this.localImages.length){
  			this.activeSlide++;
  		} else {
  			this.activeSlide = 0;
  		}
  	},
  	prev(){
  		if (this.activeSlide-1>=0){
  			this.activeSlide--;
  		} else {
  			this.activeSlide = this.localImages.length-1;
  		}
  	}
  },
  created: function(){
	this.localImages = this.images;
  }
};
</script>
<style lang="sass" scoped>
@import "@/assets/sass/all";
.gallery
	width: 100%
	height: 200px
	overflow: hidden
	border-radius: 10px
	position: relative
	&:hover
		.arrow	
			opacity: 1
		&:before
			opacity: 1
	.arrow
		opacity: 0
		transition: opacity ease-in-out .2s
	&:before
		content: ""
		z-index: 6
		width: 100%
		height: 100%
		position: absolute
		left: 0
		top: 0
		opacity: 0
		transition: opacity ease-in-out .2s
		background: linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(246,246,246,0) 50%, rgba(0,0,0,0.2) 100%)

.wrapper, img
	width: 100%
	height: 100%
.wrapper
	position: relative
	z-index: 4
img
	object-fit: cover
	position: absolute
	opacity: 0
	transition: opacity ease-in-out .2s
	&.active
		opacity: 1
.arrow
	position: absolute
	top: 50%
	transform: translateY(-50%)
	z-index: 7
	background: $accent
	+flex(center, center)
	width: 40px
	height: 40px
	border-radius: 100%
	left: 20px
	color: #fff
	cursor: pointer
	&.next
		left: auto
		right: 20px
	&.prev
		transform: rotate(180deg) translateY(50%)
</style>




