import { createRouter, createWebHistory } from "vue-router";
import Homepage from "/src/components/Homepage.vue";
import Portfolio from "/src/components/Portfolio.vue";
import ChiSono from "/src/components/ChiSono.vue";
import ProjectDetail from "/src/components/ProjectDetail.vue";
import NotFound from "/src/components/NotFound.vue"; // Importa il componente NotFound

const routes = [
  { path: '/', name: 'Homepage', component: Homepage },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/chi-sono', name: 'ChiSono', component: ChiSono },
  { path: '/projects/:slug', name: 'ProjectDetail', component: ProjectDetail }, // rotta dinamica
  { path: '/:catchAll(.*)', component: NotFound } // catch-all per pagina Not Found
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
