import { createRouter, createWebHistory } from 'vue-router';
import ErrorView from "../ErrorView.vue";
import HomeView from "../HomeView.vue";

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'ErrorView',
        component: ErrorView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
