<template lang="pug">

header
	.container
		.logo
			svgi(name="logo")
		.menu
			ul.nav
				li Главная
				li Все проекты
			div.button 
				span Войти
				svgi(name="login")
			.burger(:class="{active: burger}", @click="burger = !burger")
				.line.l1
				.line.l2
				.line.l3
</template>


<script>

export default {
  name: "index",
  components: {

  },
  data: function () {
	return {
		burger: true,
    }
  }
};
</script>

<style lang="sass">
@import "@/assets/sass/all";
header
	width: 100%
	display: flex
	justify-content: space-between
	padding-top: 20px
	
.logo
	display: flex
	color: $accent
	svg
		font-size: 45px
		margin-right: 10px
	h1
		margin: 0	
.menu
	display: flex
	align-items: center
.nav
	display: flex
	list-style-type: none
	margin-right: 30px
	+below(520px)
		display: none
		margin-right: 10px
	li
		text-decoration: none
		margin-left: 20px
		cursor: pointer
.button
	padding-left: 25px
	padding-right: 25px
	padding-top: 15px
	padding-bottom: 15px
	background: $accent
	color: #fff
	border-radius: 10px
	transition: background ease-in-out .2s
	cursor: pointer
	+flex(center, center)
	&:hover
		background: $accentb
	svg
		margin-left: 8px
.burger
	display: none
	height: 25px
	width: 40px
	z-index: 13
	position: relative
	margin-left: 20px
	cursor: pointer
	+below(520px)
		display: block
	.line
		width: 100%
		height: 2px
		position: absolute
		background-color: #000
		&:nth-child(1)
			top: 0px
			max-width: 100%
			transition: max-width ease-in-out 0.4s
		&:nth-child(2)
			top: 50%
			transform: translateY(0%)
			transition: top ease-in-out 0.4s, transform ease-in-out 0.4s
		&:nth-child(3)
			top: 100%
			transform: translateY(-50%)
			transition: top ease-in-out 0.4s, transform ease-in-out 0.4s
	&.active
		.line
			&:nth-child(1)
				top: 0px
				max-width: 0
			&:nth-child(2)
				top: 50%
				transform: rotate(45deg) translateX(0%)
			&:nth-child(3)
				top: 50%
				transform: rotate(-45deg) translateY(0%)
</style>



