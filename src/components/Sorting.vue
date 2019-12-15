<template lang="pug">
.sorting.container
	.sort
		.tags
			v-select(multiple placeholder="Выберите теги" v-model="tagsSelected" :options="tagsAll")
		.button(@click="openMap()")
			| Выбрать точку 
	.button.sub(@click="submit")
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
	+below(860px)
		flex-direction: column
		.button
			display: block
		.sub
			margin-top: 20px
	+below(480px)
		.sort
			width: 100%
			flex-wrap: wrap
		.button
			margin-top: 20px
			width: 100%
			text-align: center
	.sort
		+flex()
		flex-direction: row
	.tags
		width: 300px
		margin-right: 20px
		+below(480px)
			width: 100%
			margin-right: 0
		input
			height: 38px

	.button
		height: 100%

</style>