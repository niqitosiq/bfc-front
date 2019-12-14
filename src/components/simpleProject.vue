<template lang="pug">
.container
  .simpleProjects
    oneProject(
      v-for="item in this.$store.state.projects"
      :title="item.title"
      :total="item.total"
      :geted="item.geted"
      :description="item.description")
  router-link(to="/projects")
    .button Посмотреть больше
</template>

<script>
import oneProject from "@/components/oneProject.vue";
import store from "@/store";

export default {
  name: "index",
  components: {
    oneProject
  }, 
  methods: {
    update(){
      store.dispatch("getProjects", {count: 3, from: 0});
    }
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



