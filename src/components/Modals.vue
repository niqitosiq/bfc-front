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


	modal(width="500px" class="map" overlayTransition="nice-modal-fade" height="auto" name="map")
		yandex-map(:coords="coordinates" zoom="1" @click="setPoint")
			ymap-marker(:coords="coordinateProject" markerId=2)
		button.button(@click="submit")
			span Подтвердить
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
			error: "",
			coordinates: [52, 42],
			coordinateProject: [0, 0] 
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
			},
			setPoint(e){
				this.coordinateProject = e.get('coords');
			},
			submit(){
				this.$modal.hide('map');
				this.$store.commit("updateCoord", {coord: this.coordinateProject});
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

.map .v--modal-box
	display: flex
	justify-content: center
	align-items: center
	flex-direction: column
	button
		margin-top: 20px
		margin-bottom: 20px
</style>
<style lang="sass" scoped>
.ymap-container
	width: 100%
	height: 400px
</style>




