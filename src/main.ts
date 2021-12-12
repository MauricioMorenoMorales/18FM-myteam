import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.routes';
import './normalize.css';
import './globals.styl';

createApp(App).use(router).mount('#app');
