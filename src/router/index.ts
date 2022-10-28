import StartPage from '../views/StartPage.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    { path: '/', component: StartPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
