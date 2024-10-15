import { reactive } from 'vue';

export const store = reactive({
  menu: [
    { name: 'Homepage', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Chi sono', path: '/chi-sono' }
  ],
  apiUrl: 'http://localhost:8000/api/projects', // URL per l'API
  
  setApiUrl(newUrl) {
    this.apiUrl = newUrl;
  }
});
