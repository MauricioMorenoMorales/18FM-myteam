<template lang="pug">
.about
	.intro--container
		article.intro
			h2 About
			p We help companies build dynamic teams made up of top global talent.
				|Using our network of passionate professionals we drive innovation
				|and deliver incredible outcomes. Talented, diverse teams shape the
				|best products and experiences. We’ll bring those teams to you.
	article.director-cards
		director-card
		director-card
		director-card
		director-card
		director-card
		director-card
	get-started-footer
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
.intro
	text-align center
	padding 30px 20px 100px 20px
	max-width 330px
	margin 0 auto
	&--container
		background-image url('~@assets/bg-pattern-about-1-mobile-nav-1.svg')
		background-repeat no-repeat
		background-position-y calc(100% + 100px)
		background-position-x calc(100% + 100px)
	& > h2
		margin-bottom 30px
.director-cards
	padding 30px 20px
	max-width 320px
	margin 0 auto
	& > *
		margin-bottom 30px
@media screen and (min-width 768px)
	.intro
		max-width 600px
		&--container
			background-position-y bottom
@media screen and (min-width 1100px)
	.intro
		max-width 1100px
		display grid
		grid-template-columns 380px 1fr
		text-align start
		padding 40px 0 100px 0
		& > h2
			margin-top 30px
		& > p
			padding-top 30px
			position relative
			&::after
				content ''
				height 4px
				width 50px
				background-color accent
				position absolute
				top 0
				left 0
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import GetStartedFooter from '@components/GetStartedFooter.vue';
import DirectorCard from '@components/DirectorCard.vue';
export default defineComponent({
	components: {
		GetStartedFooter,
		DirectorCard,
	},
});
</script>
