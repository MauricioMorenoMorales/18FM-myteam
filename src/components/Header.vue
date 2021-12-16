<template lang="pug">
header
	.left
		img(src="../assets/logo.svg" @click.prevent="goToHomePage()")
		router-link(to="/") Home
		router-link(to="/about") about
	.right
		Button.button(@click-event="goToContactPage()") Contact Us
		Burger.burger(
			@click-event="toggleMenu"
			:active-state="plegableMenu"
			:class="{'absolute': plegableMenu}")
	.plegable-menu--background(v-if="plegableMenu" @click="toggleMenu(false)")
	transition(name="menu"): .plegable-menu(@click.stop="" v-if="plegableMenu")
		a(href="/") Home
		a(href="/") about
		Button.button(@click.native="goToContactPage()") Contact Us
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
.menu-enter-active
	animation menu-enter 0.5s
.menu-leave-active
	animation menu-enter 0.5s reverse
header
	height 100px
	display flex
	justify-content space-between
	align-items center
	padding 30px
	.left
		display flex
		gap 40px
		align-items center
		& > a
			display none
		img
			cursor pointer
	.right
		& > .button
			display none
		& > .burger
			position relative
			z-index 110
			&.absolute
				position fixed
				right 30px
				top 30px
	.plegable-menu
		background-color secondaryDesaturated
		position fixed
		z-index 100
		right 0
		bottom 0
		height 100vh
		width 255px
		display flex
		flex-direction column
		padding 100px 40px
		background-image url('../assets/bg-pattern-about-1-mobile-nav-1.svg')
		background-repeat no-repeat
		background-position-y center
		background-position-x 280%
		& > *
			margin-top 20px
		&--background
			position fixed
			background-color modalBackground
			top 0
			bottom 0
			left 0
			right 0
@media screen and (min-width 768px)
	header
		.left
				& > a
					display inline
		.right
			& > .burger
				display none
			& > .button
				display flex
		.plegable-menu
			display none
			&--background
				display none
@media screen and (min-width: 1100px)
	header
		max-width 1100px
		margin 0 auto
		padding 30px 0px
@keyframes menu-enter {
	0% {
		transform translateX(300px)
	}
	100% {
		transform translateX(0px)
	}
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './atoms/Button.vue';
import Burger from './atoms/Burger.vue';
export default defineComponent({
	data() {
		return {
			plegableMenu: false,
		};
	},
	components: {
		Button,
		Burger,
	},
	methods: {
		toggleMenu(value: boolean): void {
			this.plegableMenu = value;
		},
		goToContactPage(): void {
			this.toggleMenu(false);
			this.$router.push('/contact');
		},
		goToHomePage(): void {
			this.toggleMenu(false);
			this.$router.push('/');
		},
	},
});
</script>
