<template lang="pug">
.home
	.hero--container
		.hero
			h1 Find the best <b>talent</b>
			p Finding the right people and building high performing teams can be hard.
				|Most companies aren't tapping into the abundance of global talent.
				|We're about to change that.
	.features--container
		.features
			h3.features__title Build &amp; manage distributed teams like no one else.
			.features__points
				.features__points__item
					img(src="~@assets/icon-person.svg")
					.features__points__item__text
						p <b>Experienced Individuals</b>
						small Our network is made up of highly experienced professionals who are passionate about what they do.
				.features__points__item
					img(src="~@assets/icon-cog.svg")
					.features__points__item__text
						p <b>Easy to Implement</b>
						small Our processes have been refined over years of implementation meaning our teams always deliver.
				.features__points__item
					img(src="~@assets/icon-chart.svg")
					.features__points__item__text
						p <b>Experienced Individuals</b>
						small Our network is made up of highly experienced professionals who are passionate about what they do.
	.success--container
		.success
			h3 Delivering real results for top companies. Some of our <mark>success stories.</mark>
			.success__points
				.success__points__item
					small
						|“The team perfectly fit the specialized skill set required.
						|They focused on the most essential features helping us launch the platform eight months faster than planned.”
					p Kady Baker
					cite Product Manager at Bookmark
					img(src="~@assets/avatar-kady.jpg")
				.success__points__item
					small
						|“We needed to automate our entire onboarding process. The team came in and
						|built out the whole journey. Since going live, user retention has gone through the roof!”
					p Aiysha Reese
					cite Founder of Manage
					img(src="~@assets/avatar-aiysha.jpg")
				.success__points__item
					small
						|“Amazing. Our team helped us build an app that delivered a new experience
						|for hiring a physio. The launch was an instant success with 100k downloads in the first month.”
					p Arthur Clarke
					cite Co-founder of MyPhysio
					img(src="~@assets/avatar-arthur.jpg")
	get-started-footer
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
.hero
	height 450px
	text-align center
	background-image url('~@assets/bg-pattern-home-2.svg')
	background-repeat no-repeat
	background-position bottom center
	h1, p
		max-width 320px
		margin 0 auto
		margin-top 30px
.features
	padding 60px 20px
	max-width 320px
	margin 0 auto
	&--container
		background-image url('~@assets/bg-pattern-home-3.svg')
		background-repeat no-repeat
		background-position calc(100% + 100px) 0
		background-color secondarySaturated
	& > h3
		max-width 200px
		padding-top 30px
		position relative
		z-index 10
		&::after
			content ""
			height 4px
			width 50px
			background-color accent
			position absolute
			top 0
			left 0
	&__points
		text-align center
		&__item
			margin-top 30px
.success
	max-width 320px
	text-align center
	margin 0 auto
	&--container
		padding 100px 20px
		background-image url('~@assets/bg-pattern-home-4-about-3.svg'), url('~@assets/bg-pattern-home-5.svg')
		background-repeat no-repeat, no-repeat
		background-position top left, bottom right
	& > h3
		margin-bottom 50px
	&__points
		&__item
			margin-bottom 30px
			background-image url('~@assets/icon-quotes.svg')
			background-position top center
			background-repeat no-repeat
			padding-top 20px
			small, cite
				margin-bottom 20px
			p
				color secondaryMoreDesaturated
			img
				height 62px
				width auto
				border-radius 50%
				border 2px solid secondaryMostDesaturated

@media screen and (min-width 768px)
	.hero
			h1
				max-width 350px
			p
				max-width 500px
	.features
		max-width 600px
		& > h3
			max-width 430px
		&__points
			text-align start
			&__item
				display grid
				grid-template-columns 80px 1fr
	.success
		max-width 600px
@media screen and (min-width 1100px)
	.hero
		display grid
		grid-template-columns 570px 1fr
		padding-top 70px
		text-align start
		max-width 1100px
		margin 0 auto
		background-image url('~@assets/bg-pattern-home-2.svg')
		background-position bottom right
		&--container
			background-image url('~@assets/bg-pattern-home-1.svg')
			background-repeat no-repeat
			background-position-y 80px
			background-position-x -100px
		h1
			max-width 100%
			margin-top 20px
		p
			padding-top 80px
			max-width 440px
			position relative
			&::after
				content ""
				background-color secondaryMoreDesaturated
				position absolute
				top 0
				left 0
				height 4px
				width 40px
	.features
		max-width 1100px
		display grid
		grid-template-columns 50% 50%
		padding 100px 0
		&--container
			background-position calc(100% + 100px) bottom
	.success
		max-width 1100px
		& > h3
			max-width 930px
			margin 0 auto 50px auto
		&__points
			display grid
			grid-template-columns 1fr 1fr 1fr
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import GetStartedFooter from '../components/GetStartedFooter.vue';

export default defineComponent({
	name: 'Home',
	components: {
		HelloWorld,
		GetStartedFooter,
	},
});
</script>
