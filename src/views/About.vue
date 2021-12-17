<template lang="pug">
.about
	.intro--container
		article.intro
			h2 About
			p We help companies build dynamic teams made up of top global talent.
				|Using our network of passionate professionals we drive innovation
				|and deliver incredible outcomes. Talented, diverse teams shape the
				|best products and experiences. We’ll bring those teams to you.
	.director
		h3 Meet the directors
		.director__cards
			director-card(
				avatar-name="nikita"
				name="Nikita Marks"
				job-title="Founder & CEO"
				text="“It always amazes me how much talent there is in every corner of the globe.”")
			director-card(
				avatar-name="christian"
				name="Christian Duncan"
				job-title="Co-founder & COO"
				text="“Distributed teams required unique processes. You need to approach work in a new way.”")
			director-card(
				avatar-name="cruz"
				name="Cruz Hamer"
				job-title="Co-founder & CTO"
				text="“Technology is at the forefront of enabling distributed teams. That's where we come in.”")
			director-card(
				avatar-name="drake"
				name="Drake Heaton"
				job-title="Business Development Lead"
				text="“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”")
			director-card(
				avatar-name="griffin"
				name="Griffin Wise"
				job-title="Lead Marketing"
				text="“Unique perspectives shape unique products, which is what you need to survive these days.”")
			director-card(
				avatar-name="aden"
				name="Aden Allan"
				job-title="Head of Talent"
				text="“Empowered teams create truly amazing products. Set the north star and let them follow it.”")
	.clients
		h3 Some of our clients
		.clients__logos
			img(src="~@assets/logo-the-verge.png" alt="the verge logo")
			img(src="~@assets/logo-jakarta-post.png" alt="jakarta post logo")
			img(src="~@assets/logo-the-guardian.png" alt="the guardian logo")
			img(src="~@assets/logo-tech-radar.png" alt="tech radar logo")
			img(src="~@assets/logo-gadgets-now.png" alt="gadgets now logo")
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
.director
	text-align center
	padding 130px 0
	background-color secondarySaturated
	background-image url('~@assets/bg-pattern-home-4-about-3.svg'), url('~@assets/bg-pattern-home-5.svg')
	background-repeat no-repeat, no-repeat
	background-position top left, bottom right
	&__cards
		padding 30px 20px
		max-width 320px
		margin 0 auto
		& > *
			margin-bottom 30px
.clients
	text-align center
	padding 100px 20px
	background-image url('~@assets/bg-pattern-home-3.svg')
	background-position top left
	background-repeat no-repeat
	background-color secondaryMoreSaturated
	& > h3
		margin-bottom 50px
	&__logos
		max-width 170px
		margin 0 auto
		& > *
			margin-bottom 50px
			max-height 45px
			width auto
@media screen and (min-width 768px)
	.intro
		max-width 600px
		&--container
			background-position-y bottom
	.director
		& > h3
			margin-bottom 40px
		&__cards
			display grid
			max-width 600px
			grid-template-columns 1fr 1fr
			padding 30px 0
			gap 30px
			& > *
				margin-bottom 10px
	.clients
		&__logos
			display flex
			max-width 600px
			justify-content center
			gap 30px
			& > *
				max-width 100px
				height auto
				max-height 17px
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
	.director
		&__cards
			grid-template-columns 1fr 1fr 1fr
			gap 30px
			max-width 1100px
	.clients
		&__logos
			max-width 1100px
			justify-content space-between
			gap 0
			& > *
				max-width 180px
				max-height 28px
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
