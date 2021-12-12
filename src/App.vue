<template lang="pug">
div
  Header
  router-view
  Button(
    text="this is the text"
    @click-event="helloWorld"
    kind="secondary")
  h1 Quick Waltz
  h2 Grabs quick waltz
  h3 Jived fox nymph grabs quick waltz
  h4 Jived fox nymph grabs quick waltz
  p |Sed egestas, ante et vulputate volutpat, eros pede semper est,
    |vitae luctus metus libero eu augue. Morbi purus libero,
    |faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
    |Praesent elementum hendrerit tortor. Sed semper lorem at felis.
    |Vestibulum volutpat, lacus a ultrices sagittis, mi neque. Orbi purus libero,
    |faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.Sed egestas,
    |ante et vulputate volutpat, eros pede sempe.
  small Sed egestas, ante et vulputate volutpat, eros pede semper est,
    |vitae luctus metus libero eu augue. Morbi purus libero,
    |faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
    |Praesent elementum hendrerit tortor. Sed semper lorem at felis.
    |Vestibulum volutpat, lacus a ultrices sagittis, mi neque. Orbi purus libero,
    |faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.Sed egestas,
    |ante et vulputate volutpat, eros pede sempe.
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './components/atoms/Button.vue';
import Header from './components/Header.vue';

export default defineComponent({
	components: {
		Button,
		Header,
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
  background-color secondaryMoreSaturated
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color textPrimary
</style>
