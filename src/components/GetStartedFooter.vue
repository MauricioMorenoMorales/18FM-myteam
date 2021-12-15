<template lang="pug">
.get-started-footer
	.container
		h3 Ready to get started?
		Button(kind="primary-inverted") Contact Us
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
.get-started-footer
	background-image url('../assets/bg-pattern-home-6-about-5.svg')
	height 300px
	background-repeat no-repeat
	background-position left bottom
	background-color accent
	display flex
	justify-content center
	align-items center
	.container
		display flex
		flex-direction column
		align-items center
		h3
			color secondaryMoreSaturated
			margin-bottom 30px
			text-align center
@media screen and (min-width 768px)
	.get-started-footer
		height 200px
		padding 100px
		.container
			flex-direction: row
			width 100%
			justify-content center
			max-width 1100px
			margin 0 auto
			justify-content space-between
			h3
				padding-top 20px
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './atoms/Button.vue';
export default defineComponent({
	components: {
		Button,
	},
});
</script>
