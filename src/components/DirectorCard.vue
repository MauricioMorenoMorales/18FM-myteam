<template lang="pug">
div.director-card
	.content(v-if="!isOpened")
		img(:src="getLink()")
		p {{name}}
		cite {{jobTitle}}
	.content(v-else)
		p {{name}}
		small {{text}}
		.social
			Icon(
				icon-name="twitter"
				:iconColor="colorSystem.basePrimary"
				:hoverColor="colorSystem.accent")
			Icon(
				icon-name="linkedin"
				:iconColor="colorSystem.basePrimary"
				:hoverColor="colorSystem.accent")
	button(:class="{'is-opened': isOpened}" @click.prevent="toggle")
		Icon(
			icon-name="close"
			:iconColor="colorSystem.secondarySaturated"
			:hoverColor="colorSystem.secondarySaturated"
		)
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
.director-card
	text-align center
.content
	background-color secondaryMoreSaturated
	text-align center
	padding 40px 40px 60px 40px
	height 100%
	max-height 240px
	width 100%
	img
		height 96px
		width 96px
		border-radius 50%
		border 2px solid secondaryMostDesaturated
	small
		margin-bottom 20px
	p
		color secondaryMoreDesaturated
	.social
		display flex
		justify-content center
		gap 20px
button
	height 56px
	width 56px
	border none
	border-radius 50%
	background-color accent
	margin-top -28px
	transform rotate(45deg)
	cursor pointer
	transition 0.2s
	&:hover
		background-color lighten(accent, 30%)
	&.is-opened
		background-color secondaryMoreDesaturated
		transform rotate(0)
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { colorSystem } from '@/tokens.styles';
import Icon from '@atoms/Icon.vue';
export default defineComponent({
	data() {
		return {
			isOpened: false,
			colorSystem,
		};
	},
	props: {
		avatarName: {
			type: String,
			default: 'nikita',
		},
		name: {
			type: String,
			default: 'Nikita Marks',
		},
		jobTitle: {
			type: String,
			default: 'Founder & CEO',
		},
		text: {
			type: String,
			default:
				'“It always amazes me how much talent there is in every corner of the globe.”',
		},
	},
	components: {
		Icon,
	},
	methods: {
		toggle() {
			this.isOpened = !this.isOpened;
		},
		getLink() {
			return require(`../assets/avatar-${this.avatarName}.jpg`);
		},
	},
});
</script>
