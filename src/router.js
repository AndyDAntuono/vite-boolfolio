import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './components/Homepage.vue';
import Portfolio from './components/Portfolio.vue';
import ChiSono from './components/ChiSono.vue';

const routes = [
  { path: '/', name: 'Homepage', component: Homepage },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  {path: '/chi-sono', name: 'ChiSono', component: ChiSono }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
