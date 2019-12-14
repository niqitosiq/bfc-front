<template lang="pug">
.sorting.container
	.sort
		.tags
			v-select(multiple placeholder="Выберите теги" v-model="tagsSelected" :options="tagsAll")
		.button(@click="openMap()")
			| Выбрать точку 
	.button(@click="submit")
		span Применить
</template>

<script>
//import  from "@/components/.vue";

export default {
  name: "sorting",
  components: {
    
  }, 
  data: function(){
    return {
     tagsSelected: [],
     tagsAll: ['Canada','United States', 'Canada2','United States2']
    }
  },
  methods: {
  	openMap(){
  		this.$modal.show('map');
  	}, 
  	submit(){
  		this.$store.dispatch("getProjects", {tags: this.tagsSelected})
  	}
  }
};
</script>
<style lang="sass">
@import "@/assets/sass/all";

.sorting
	+flex(center, space-between, row)
	.sort
		+flex()
		flex-direction: row
	.tags
		width: 300px
		margin-right: 20px
		input
			height: 38px

	.button
		height: 100%

</style>