<template lang="pug">
button(
	@click.prevent="action()"
	:class="{ secondary: kind == 'secondary', fullWidth: fullWidth}"
	:disabled="disabled"
) {{text}}
</template>

<style lang="stylus" scoped>
@import '../../_tokens.styl'
button
	height 48px
	border-radius 48px
	border 2px solid basePrimary
	padding 16px 32px
	display flex
	justify-content center
	align-items center
	font-size 1.8rem
	background-color transparent
	color basePrimary
	transition 0.1s
	cursor pointer
	&.fullWidth
		width 100%
	&:hover
		background-color basePrimary
		color primary
	&:disabled
		border 2px solid basePrimaryTransparent
		color basePrimaryTransparent
		cursor default
		&:hover
			background-color transparent
	&.secondary
		background-color basePrimary
		color primary
		&:hover
			background-color transparent
			color basePrimary
		&:disabled
			background-color basePrimaryTransparent
			color primaryTransparent
			border none
			cursor default
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	emits: ['click-event'],
	props: {
		text: {
			type: String,
			required: true,
		},
		kind: {
			type: String as PropType<'primary' | 'secondary'>,
			default: 'primary',
		},
		fullWidth: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		action(): void {
			this.$emit('click-event');
		},
	},
});
</script>
