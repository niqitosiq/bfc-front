<template lang="pug">

.main
	.container
		.left
			h1 
				| Крауд-фандинг 
				br
				| площадка для развития 
				span.accent безбарьерной среды 
			p Помогаем маломобильным гражданам жить с комфортом
		.right
			register
</template>

<script>
// @ is an alias to /src
import register from "@/components/register.vue";

export default {
  name: "index",
  components: {
    register,
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
</style>
