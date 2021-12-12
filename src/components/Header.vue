<template lang="pug">
header
	.left
		img(src="../assets/logo.svg")
		a(href="/") Home
		a(href="/") about
	.right
		Button.button(text="Contact Us" @click-event="toggleMenu(false)")
		Burger.burger(@click-event="toggleMenu" :active-state="plegableMenu")
	.plegable-menu--background(v-if="plegableMenu" @click="toggleMenu(false)")
		.plegable-menu(@clcik.stop)
			a(href="/") Home
			a(href="/") about
			Button.button(text="Contact Us" @click-event="toggleMenu(false)")
</template>

<style lang="stylus" scoped>
@import '../_tokens.styl'
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
	.right
		& > .button
			display none
		& > .burger
			position relative
			z-index 100
	.plegable-menu
		background-color secondaryDesaturated
		position fixed
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
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './atoms/Button.vue';
import Burger from './atoms/Burger.vue';
export default defineComponent({
	data() {
		return {
			plegableMenu: true,
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
	},
});
</script>
