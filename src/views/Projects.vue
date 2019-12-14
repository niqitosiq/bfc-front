<template lang="pug">

.main
	.container
		h1 Все проекты
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
<style lang="sass">
@import "@/assets/sass/all";

</style>
