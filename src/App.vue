<template lang="pug">
div
  Header
  router-view
  Footer
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './components/atoms/Button.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
	components: {
		Button,
		Header,
		Footer,
	},
	methods: {
		helloWorld(message: string): void {
			alert(message);
		},
	},
});
</script>

<style lang="stylus">
@import './_tokens.styl'
#app
  background-color secondaryDesaturated
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color textPrimary
</style>
