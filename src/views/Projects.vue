<template lang="pug">

.main
	.back
		.container
			h1 Все проекты
			p На этой странице вы можете увидить проекты, которые нуждаются в вашей поддержке.
	simpleProject
</template>

<script>
import simpleProject from "@/components/simpleProject.vue";

export default {
  name: "index",
  components: {
    simpleProject
  }
};
</script>
<style lang="sass" scoped>
@import "@/assets/sass/all";
.container
	flex-direction: column
	align-items: flex-start
	padding-top: 10px
	padding-bottom: 30px
.back
h1
	margin-top: 20px
	margin-bottom: 20px
p
	margin-top: 10px
</style>
