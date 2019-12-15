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
	.container(v-if="$store.state.Projects.projects.length>0")
		h2.last Последние проекты на площадке
	simpleProject
	.container.more-cont(v-if="$store.state.Projects.projects.length>0")
		router-link(to="/projects")
			.button() Посмотреть больше
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
.more-cont
	+flex(center, center)
	padding-bottom: 50px
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

h2.last
  text-align: left
  align-self: flex-start
  font-size: 30px
</style>




