import {createApp} from 'vue';
import './style.scss';
import App from './App.vue';
import { CreateRouter } from './factory/RouterFactory';
import { createPinia } from 'pinia';

createApp(App)
	.use(CreateRouter())
	.use(createPinia())
	.mount('#app');
 