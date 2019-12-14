<template lang="pug">
form.register(v-on:submit.prevent="send()")
	div(class="registr" v-if="!this.$store.state.Auth.auth")
		h2 Регистрация
		.field
			input(placeholder="Логин" name="login" type="text" v-model="login" required)
		.field
			input(placeholder="Пароль" name="password" type="password" v-model="password" required)
		button.send(type="submit") Зарегистрироваться
		p.error {{ error }}
	div(v-else class="registred")
		h2 Вы успешно зарегестрированы!
		p Вы можете разместить проекты для краудфандинга
		router-link(to="/new").button
			span Создать

</template>

<script>
import store from '@/store';
export default {
  name: "register",
  methods: {
  	send(){
  		const { login, password } = this;
  		store.dispatch("register", {login: login, password: password})
  		.then((response) => {
  			console.log(response);
      		if (response) {this.error = response.message;}
      		else {this.error = ""; this.login = ""; this.password = ""}
      	});
  	}
  },
  data: function(){
  	return {
	  	password: "",
	  	login: "",
	  	error: ""
  	}
  },
};
</script> 

<style lang="sass">
@import "@/assets/sass/all";

.right
	+below(480px)
		width: 100%

.register
	width: 350px
	border: 1px solid $light
	padding-left: 20px
	padding-right: 20px
	padding-top: 10px
	padding-bottom: 30px
	border-radius: 10px
	margin-top: 30px
	min-height: 303px
	background: #fff
	margin-bottom: 30px
	+flex(center, center, column)
	+below(1000px)
		margin-left: 40px
	+below(720px)
		margin-left: 0
	+below(480px)
		width: 100%

	h2
		text-align: center
		margin-bottom: 20px
	p
		text-align: center
	.field
		margin-bottom: 30px
	.field, input, button
		width: 100%
	input
		border: none
		border-bottom: solid 1px $light
		padding-bottom: 10px
		padding-top: 10px
		padding-left: 20px
		padding-right: 20px
		transition: border-bottom ease-in-out 0.4s
		&:focus
			border-bottom: solid 1px $accent
	button
		background: $accent
		color: #fff
		padding-top: 10px
		padding-bottom: 10px
		border-radius: 10px
		border: none
		cursor: pointer
	.registred
		//padding-left: 30px
		//padding-right: 30px
		.button
			color: #fff
			margin-top: 30px
	.registr
		width: 100%
	.error
		color: red
		width: 100%
		text-align: center
</style>







