<template lang="pug">
.modals
	modal(width="400px" overlayTransition="nice-modal-fade" height="auto" name="auth" class="auth box")
		form.register(v-on:submit.prevent="send()")
			h2 Авторизация
			.field
				input(placeholder="Логин" name="login" type="text" v-model="login" required)
			.field
				input(placeholder="Пароль" name="password" type="password" v-model="password" required)
			button.send(type="submit") Войти 
			p.error {{ error }}
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

export default {
  name: "index",
  components: {
    
  }, 
  data: function(){
    return {
    	password: "",
    	login: "",
    	error: ""
    }
  },
  methods: {
      send(){
      	this.$store.dispatch("login", {
      		"login": this.login,
      		"password": this.password,
      	}).then((response) => {
      		if (response) {this.error = response.message;}
      		else {this.$modal.hide("auth"); this.error = ""; this.login = ""; this.password = ""}
      	})
      	
      }

  }
};
</script>
<style lang="sass">
@import "@/assets/sass/all";
.auth
	.v--modal-box
		+flex(center, center)
	.register
		border: none
</style>