<template lang="pug">
.container
  .simpleProjects
    oneProject(
      v-for="item in this.$store.state.Projects.projects"
      :title="item.title"
      :total="item.price"
      :geted="item.alreadyhave"
      :description="item.description"
      :url="item.id"
      :img="item.files")
</template>

<script>
import oneProject from "@/components/oneProject.vue";
import store from "../store";

export default {
  name: "index",
  components: {
    oneProject
  }, 
  methods: {
    update(){
      store.dispatch("getProjectsPage");
    },
  }, 
  created(){
    store.dispatch("discard");
    store.dispatch("getProjectsPage");
  }
};
</script>
<style lang="sass" scoped>
@import "@/assets/sass/all";
.container
  flex-direction: column
  padding-bottom: 50px
.simpleProjects
  +flex(flex-start, space-between)
  flex-wrap: wrap
  margin-top: 50px
  width: 100%

.button
  margin-top: 40px
</style>



