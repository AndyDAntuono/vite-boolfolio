import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa il router

// Collega il router all'app Vue
createApp(App)
  .use(router) // Usa il router
  .mount('#app'); // Monta l'app
