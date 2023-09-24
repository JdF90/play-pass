import StartPage from '../views/StartPage.vue';
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

export const enum ROUTES {
	START_PAGE = 'Start Page',
	GAME_PAGE = 'Game Page',
	GAME_RESULT_PAGE = 'Game Result Page'
}

const routes: RouteRecordRaw[] = [
	{ name: ROUTES.START_PAGE , path: '/', component: StartPage },
	{ name: ROUTES.GAME_PAGE, path: '/game', component: () => import('../views/GamePage.vue') },
	{ name: ROUTES.GAME_RESULT_PAGE, path: '/game/:id/result', component: () => import('../views/GameResultPage.vue')
	},
];

export const router = () => createRouter({
	history: createWebHistory(),
	routes,
});
