<template lang="pug">
button(
	@click.prevent="action()"
	:class="[kind, {'full-width': fullWidth}]"
	:disabled="disabled")
	slot
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
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
	&.full-width
		width 100%
	&:hover
		background-color basePrimary
		color primary
	&:disabled
		border 2px solid basePrimaryTransparent
		color basePrimaryTransparent
		cursor default
		pointer-events: none
	&.primary-inverted
		color secondaryMoreSaturated
		border 2px solid secondaryMoreSaturated
		background-color transparent
		&:hover
			color basePrimary
			background-color secondaryMoreSaturated
			border 2px solid secondaryMoreSaturated
		&:disabled
			cursor default
			color primaryTransparent
			border 2px solid primaryTransparent
			pointer-events none
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
			pointer-events none
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	emits: ['click-event'],
	props: {
		kind: {
			type: String as PropType<'primary' | 'primary-inverted' | 'secondary'>,
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
