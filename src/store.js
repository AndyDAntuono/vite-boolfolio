import { reactive } from 'vue';

export const store = reactive({
  menu: [
    { name: 'Homepage', path: '/' },
    { name: 'Portfolio', path: '/portfolio' }
  ],
  apiUrl: 'http://localhost:8000/api/projects', // end poin api
  
  setApiUrl(newUrl) {
    this.apiUrl = newUrl;
  }
});
