<template lang="pug">
div.input(v-if="textarea")
	textarea(:class="{error}" @input.prevent="changeFunction" :placeholder="placeholder")
	small(v-show="error") {{errorMessage}}
div.input(v-else)
	input(type="text" :class="{error}" @input.prevent="changeFunction" :placeholder="placeholder")
	small(v-show="error") {{errorMessage}}
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
input, textarea
	display block
	width 100%
	height 60px
	background-color transparent
	border none
	border-bottom 1px solid basePrimary
	color basePrimary
	font-size 1.5rem
	outline none
	padding-left 20px
	border-radius 0
	&.error
		border-bottom 1px solid red
small
	color red
	font-size 1rem
	line-height 1.2rem
textarea
	resize none
	padding-top 20px
	height 100px
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { EMAIL_REGEX } from '../../helpers/EmailRegex';
export default defineComponent({
	emits: ['change-value'],
	data() {
		return {
			error: null as null | boolean,
			value: '',
		};
	},
	props: {
		emailValidation: {
			type: Boolean,
		},
		placeholder: {
			type: String,
		},
		errorMessage: {
			type: String,
			default: 'This field must contain at least 3 characters',
		},
		minLength: {
			type: Number,
			default: 3,
		},
		name: {
			type: String,
			default: '',
			required: true,
		},
		textarea: {
			type: Boolean,
			default: false,
			required: false,
		},
	},
	methods: {
		changeFunction(event: any): void {
			if (this.emailValidation) {
				if (!EMAIL_REGEX.test(event.target.value)) {
					this.error = true;
					this.$emit('change-value', this.name, null);
				} else {
					this.error = false;
					this.$emit('change-value', this.name, event.target.value);
				}
			} else {
				if (event.target.value.length <= this.minLength) {
					this.error = true;
					this.$emit('change-value', this.name, null);
				} else {
					this.error = false;
					this.$emit('change-value', this.name, event.target.value);
				}
			}
		},
	},
});
</script>
