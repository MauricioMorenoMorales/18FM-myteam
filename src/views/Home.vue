<template lang="pug">
.home
  img(src="../assets/logo.png")
  HelloWorld
  get-started-footer
</template>

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
