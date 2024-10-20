import { createRouter, createWebHistory } from 'vue-router';
import Article from './components/Article.vue';

const routes = [
  {
    path: '/article',
    name: 'Article',
    component: Article,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
