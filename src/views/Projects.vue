<template lang="pug">
.main
	.back
		.container
			h1 Все проекты
			p На этой странице вы можете увидить проекты, которые нуждаются в вашей поддержке.
	sorting
	simpleProject
	.container.more-cont
		.button(@click="more") Посмотреть больше
</template>

<script>
import simpleProject from "@/components/simpleProject.vue";
import sorting from "@/components/Sorting.vue";

export default {
  name: "index",
  components: {
    simpleProject,
    sorting
  },
  methods: {
    more(){
      this.$store.dispatch("more");
      this.$store.dispatch("getProjectsPage");
      

    },
  }
};
</script>
<style lang="sass" scoped>
@import "@/assets/sass/all";

.back .container
	flex-direction: column
	align-items: flex-start
	padding-top: 10px
	padding-bottom: 30px
h1
	margin-top: 20px
	margin-bottom: 20px
p
	margin-top: 10px
</style>
