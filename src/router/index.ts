import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import PassportOfTheDayView from '../views/PassportOfTheDayView.vue';

const routes: RouteRecordRaw[] = [
	{ path: '/passport-of-the-day', component: PassportOfTheDayView }
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
