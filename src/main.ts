import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import { CreateRouter } from './factory/RouterFactory';
import { createPinia } from 'pinia';

createApp(App)
	.use(CreateRouter())
	.use(createPinia())
	.mount('#app');
 