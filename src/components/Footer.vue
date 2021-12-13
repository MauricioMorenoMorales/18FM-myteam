<template lang="pug">
.container
	footer
		img.logo(src="../assets/logo.svg")
		.links
			a(href="/") home
			a(href="/") about
		.address
			small 087 Hillcrest Lane
			small Irvine CA
			small California 97214
			small Call Us: 949-833-7432
		.social
			icon(
				:icon-color="colorSystem.basePrimary"
				:hover-color="colorSystem.accent"
				icon-name="facebook")
			icon(
				:icon-color="colorSystem.basePrimary"
				:hover-color="colorSystem.accent"
				icon-name="pinterest")
			icon(
				:icon-color="colorSystem.basePrimary"
				:hover-color="colorSystem.accent"
				icon-name="twitter")
		small.copyright Copyright 2020. All Rights Reserved
</template>

<style lang="stylus" scoped>
@import '../_tokens.styl'
footer
	background-color secondaryMoreSaturated
	text-align center
	padding 60px 0
	& > *
		margin-bottom 30px
	.social, .links
		display flex
		justify-content center
		gap 20px
	.address, .copyright
		color basePrimaryTransparent
@media screen and (min-width 768px)
	footer
		display grid
		grid-template-columns 130px 1fr
		padding 60px 30px
		grid-template-areas "logo address"\
												"links address"\
												"social copyright"
		.address
			grid-area address
			text-align end
		.logo
			grid-area logo
		.links
			grid-area links
		.social
			grid-area social
		.copyright
			grid-area copyright
			text-align end
@media screen and (min-width 1100px)
	.container
		background-color secondaryMoreSaturated
	footer
		max-width 1100px
		margin 0 auto
		padding 50px 0
		grid-template-columns 300px 200px 1fr
		grid-template-areas "logo address social"\
												"links address copyright"
		.links
			justify-content flex-start
		.address
			text-align start
		.social
			justify-content flex-end
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from './atoms/Icon.vue';
import { colorSystem } from '../tokens.styles';

export default defineComponent({
	components: {
		Icon,
	},
	data() {
		return {
			colorSystem,
		};
	},
});
</script>
