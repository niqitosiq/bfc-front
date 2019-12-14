<template lang="pug">

.newProject

	.back
		.container.row
			h1 Создать новый проект
			p Для создания введите все необходимые данные и загрузите изображение
	.container.row
		form(v-on:submit.prevent="send()")
			.image-wrapper
				vueDropzone(ref="myVueDropzone" id="dropzone" :options="dropzoneOptions")
			.descr-wrapper
				input(type="text" placeholder="Название")
				textarea(class="short" type="text" placeholder="Краткое описание (30 символов)" max=30)
				textarea(class="long" type="text" placeholder="Подробное описание")
				.tagarea
					tags(
					v-model="tag"
				    :tags="tags"
				    max-tags=3
				    @tags-changed="newTags => tags = newTags")
				yandex-map(:coords="coordinates" zoom="1" @click="getcoords")
					ymap-marker(:coords="coordinateProject")
				p.coords Координаты точки y: {{coordinateProject[0]}}, x: {{coordinateProject[1]}}
			button.button(type="success")
				span Создать
</template>

<script>
import Vue from 'vue';
import VueTagsInput from '@johmun/vue-tags-input';
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
Vue.component('tags', VueTagsInput);

export default {
  name: "newProject",
  components: {
  	vueDropzone: vue2Dropzone,
  },
  data: function() {
  	return {
  		tags: [],
  		tag: "",
  		dropzoneOptions: {
			url: 'https://httpbin.org/post',
			thumbnailWidth: 150,
			headers: { "Room-Allow": "" },
			dictDefaultMessage: "Загрузите изображения"
		},
		coordinates: [52, 42],
		coordinateProject: [0, 0] 
  	}
  },
  methods: {
  	getcoords(e){
  		this.coordinateProject = e.get('coords');
  	}
  }
};
</script>
<style lang="sass">
@import "@/assets/sass/all";
.newProject
	.container
		width: 600px
		+below(720px)
			width: 90%
	form
		+flex(center, flex-start, column)
		width: 600px
		padding-bottom: 100px
		+below(720px)
			width: 90%
	.image-wrapper
		width: 100%
		margin-bottom: 50px

	.descr-wrapper
		+flex(flex-start, flex-start, column)
		width: 100%

	textarea,input,button
		width: 100%
		margin-bottom: 20px
		padding-left: 20px
		padding-right: 20px
		padding-top: 10px
		padding-bottom: 10px
		border: none
		border-bottom: solid 2px $accentb
		resize: none
		&.long
			height: 200px
	.tagarea
		width: 100%

	.vue-tags-input
		max-width: 100%!important
		width: 100%
	.ymap-container
		width: 100%
		height: 300px
		margin-top: 20px

	.coords
		color: #ccc
		font-size: 14px
.back
	padding-top: 50px
	padding-bottom: 50px
	margin-bottom: 30px
	h1,p
		margin-top: 0
		margin-bottom: 10px
	p
		margin-top: 20px
</style>



