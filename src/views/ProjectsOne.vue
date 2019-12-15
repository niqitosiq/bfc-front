<template lang="pug">
.projectOne.container
	.wrapper-w
		gallery(:images='$store.state.Projects.current.files' large=true)
	.descr
		h2 {{ $store.state.Projects.current.title }}
		p {{ $store.state.Projects.current.article }}
		.total
			.geted(:style="'transform: scaleX(' + procent/100 + ')'")
			.procent {{procent}}%
		.cifres
			| {{$store.state.Projects.current.alreadyhave}}/{{$store.state.Projects.current.price}} рублей
		iframe(:src="link" width="100%" height="226" frameborder="0" allowtransparency="true" scrolling="no")
</template>

<script>
import gallery from "@/components/Gallery.vue";

export default {
  name: "ProjectOne",
  components: {
  	gallery
  },
  computed: {
  	procent: function () {
  		return Math.round(this.$store.state.Projects.current.alreadyhave/this.$store.state.Projects.current.price*100);
  	},
  	link: function(){
  		return "https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=" + this.$store.state.Projects.current.prim + "&targets-hint=%D0%A3%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5%20%D0%B7%D0%B4%D0%B5%D1%81%D1%8C%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BA%20%D0%BF%D0%BB%D0%B0%D1%82%D0%B5%D0%B6%D1%83&default-sum=100&button-text=14&payment-type-choice=on&mobile-payment-type-choice=on&hint=&successURL=&quickpay=shop&account=410018691654882"
  	}
  },
  mounted(){
  	this.$store.dispatch("updateCurrent", {id: this.$route.params.id})
  }
};
</script>
<style lang="sass">
@import "@/assets/sass/all";
.projectOne
	&.container
		margin-top: 50px
	.wrapper-w
		width: 50%
		flex-shrink: 0
		+below(720px)
			width: 100%
	h2
		color: $accent
	.descr
		padding-left: 50px
		width: 50%
		+below(720px)
			padding-left: 0
		.button
			margin-top: 50px
	.cifres
		margin-bottom: 40px
</style>
