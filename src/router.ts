import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    { path: '/', component: () => import('./pages/Home.vue') },
    { path: '/projects', component: () => import('./pages/Projects.vue') },
    { path: '/:pathMatch(.*)', component: () => import('./pages/Error.vue'), props: { code: '404' } }
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
});

export default router;
