import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import { CreateRouter } from './factory/RouterFactory';

createApp(App)
	.use(CreateRouter())
	.mount('#app');
