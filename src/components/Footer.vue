<template lang="pug">
footer
	img(src="../assets/logo.svg")
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
