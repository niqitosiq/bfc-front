<template lang="pug">

header
	.container
		.logo
			svgi(name="logo")
			.descr
				h2 BarFree
				p Краудфандинг для города
		.menu
			ul.nav
				router-link(to="/")
					li Главная
				router-link(to="/projects")
					li Все проекты
			div.button 
				span Войти
				svgi(name="login")
			.burger(:class="{active: burger}", @click="burger = !burger")
				.line.l1
				.line.l2
				.line.l3
	transition(name="fade_top")
		ul.mobile-menu.nav(v-if="burger")
			router-link(to="/")
				li Главная
			router-link(to="/projects")
				li Все проекты
			li.button 
				span Войти
				svgi(name="login")

</template>


<script>

export default {
  name: "index",
  components: {

  },
  data: function () {
	return {
		burger: false,
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
	padding-bottom: 20px
	border-bottom: solid 1px #ccc
	background: #fff
	z-index: 4
	position: relative
	.container
		flex-direction: row
		align-items: center
.logo
	+flex(center, center)
	color: $accent
	svg
		font-size: 45px
		margin-right: 15px
		flex-shrink: 0
	h2, p
		margin: 0	
	p
		font-size: 16px
		color: #807f7f
		+below(340px)
			font-size: 14px
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
	+below(520px)
		display: none
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
.mobile-menu
	display: none
	background: #fff
	position: absolute
	top: 0
	width: 100%
	padding-left: 0px
	padding-top: 20px
	padding-bottom: 20px
	border-bottom: solid 1px #ccc
	z-index: 3
	+below(520px)
		+flex(center, center, column)
	.button
		display: block
		margin-top: 20px
	li
		width: auto
		text-align: center
		margin-top: 10px
		margin-left: 0
		font-size: 18px
</style>



