<template lang="pug">
form.register(@prevent="send()")
	h2 Регистрация
	.field
		input(placeholder="Логин" name="login" type="text")
	.field
		input(placeholder="Пароль" name="password" type="password")
	button.send(type="submit") Зарегестрироваться
</template>

<script>
export default {
  name: "register",
  methods: {
  	register(){

  	}
  }
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
	+below(1000px)
		margin-left: 40px
	+below(720px)
		margin-left: 0
	+below(480px)
		width: 100%

	h2
		text-align: center
		margin-bottom: 20px
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
</style>







