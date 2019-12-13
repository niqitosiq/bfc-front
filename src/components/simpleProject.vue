<template lang="pug">
.container
  .simpleProjects
    oneProject(
      title="Имя" 
      total=689 
      geted=150
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    oneProject(
      title="Имя" 
      total=689 
      geted=150
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    oneProject(
      title="Имя" 
      total=689 
      geted=150
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    oneProject(
      title="Имя" 
      total=689 
      geted=150
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    oneProject(
      title="Имя" 
      total=689 
      geted=150
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    oneProject(
      title="Имя" 
      total=689 
      geted=150
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    
  router-link(to="/projects")
    .button Посмотреть больше
</template>

<script>
import oneProject from "@/components/oneProject.vue";
//import store from "./store";

export default {
  name: "index",
  components: {
    oneProject
  }, 
  data: function(){

  },
  methods: {

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
.button
  margin-top: 40px
</style>



