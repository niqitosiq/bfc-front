<template lang="pug">

.main
	.back
		.container
			.left
				h1 
					| Крауд-фандинг 
					br
					| площадка для помощи в развитии 
					span.accent  города
				p Помощь в развитии проектов 
			.right
				register
	simpleProject
</template>

<script>
import register from "@/components/register.vue";
import simpleProject from "@/components/simpleProject.vue";

export default {
  name: "index",
  components: {
    register,
    simpleProject
  }
};
</script>
<style lang="sass">
@import "@/assets/sass/all";

h1 
	font-size: 45px
	+below(1000px)
		font-size: 35px
	+below(720px)
		padding-right: 40px
		font-size: 30px
		br
			display: none
	.accent
		color: $accent
.back
	background-image: url('/images/bcgc.png')
	background-size: cover
	
</style>




