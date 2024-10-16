<template>
    <div v-if="notFound">
      <!-- Visualizza il componente NotFound quando il progetto non esiste -->
      <NotFound />
    </div>
    <div v-else-if="project">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
    </div>
    <div v-else>
      <p>Caricamento in corso...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import NotFound from './NotFound.vue'; // Importa il componente NotFound
  
  export default {
    name: 'ProjectDetail',
    data() {
      return {
        project: null,
        notFound: false, // Stato per gestire il 404
      };
    },
    mounted() {
      this.fetchProject();
    },
    methods: {
      fetchProject() {
        const slug = this.$route.params.slug; // Ottieni lo slug dall'URL
        axios.get(`http://localhost:8000/api/projects/${slug}`)
          .then(response => {
            this.project = response.data; // Salva i dati del progetto se esiste
          })
          .catch(error => {
            if (error.response && error.response.status === 404) {
              this.notFound = true; // Imposta lo stato a true se il progetto non viene trovato
            } else {
              console.error('Errore durante il recupero del progetto:', error);
            }
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Aggiungi eventuali stili */
  </style>
  