<template lang="pug">
.contact
	.description
		h2 Contact
		h3 <b>Ask us about</b>
		.description__points
			.description__points__item
				img(src="~@assets/icon-person.svg")
				p The quality of our talent network
			.description__points__item
				img(src="~@assets/icon-cog.svg")
				p Usage &amp; implementation of our software
			.description__points__item
				img(src="~@assets/icon-chart.svg")
				p How we help drive innovation
	.form
		Input(@change-value="inputFunction" name="name" placeholder="Name")
		Input(
			@change-value="inputFunction"
			name="email"
			placeholder="Email Address"
			email-validation
			error-message="Please provide a valid email")
		Input(@change-value="inputFunction" name="companyTitle" placeholder="Company Title")
		Input(@change-value="inputFunction" name="title" placeholder="Title")
		Input(@change-value="inputFunction" name="message" textarea placeholder="Message")
		Button(@click-event="sendForm()") Submit
</template>

<style lang="stylus" scoped>
.contact
	padding 100px 20px
.description
	text-align center
	max-width 320px
	margin 0 auto
	&__points
		&__item
			display flex
			align-items center
			text-align start
			margin-top 20px
			& > p
				margin-left 20px
				margin-top 20px
.form
	max-width 320px
	margin 0 auto
	& > *
		margin-top 25px
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from '@atoms/Input.vue';
import Button from '@atoms/Button.vue';
type formInputTypes = 'name' | 'email' | 'companyTitle' | 'title' | 'message';
export default defineComponent({
	data() {
		return {
			formData: {
				name: null as null | string,
				email: null as null | string,
				companyTitle: null as null | string,
				title: null as null | string,
				message: null as null | string,
			},
			disabled: true,
		};
	},
	components: {
		Input,
		Button,
	},
	methods: {
		inputFunction(name: formInputTypes, value: string | null): void {
			this.formData[name] = value;
			console.log(name, value);
		},
		sendForm() {
			for (const key in this.formData) {
				if (this.formData[key as formInputTypes] === null) {
					return alert('Please fill all the fields');
				}
			}
			return alert(`Thanks ${this.formData.name} the message has been sended`);
		},
	},
});
</script>
