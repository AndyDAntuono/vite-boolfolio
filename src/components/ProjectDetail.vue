<template>
    <div v-if="project">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
    </div>
    <div v-else>
      <p>Caricamento in corso...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ProjectDetail',
    data() {
      return {
        project: null,
      };
    },
    mounted() {
      this.fetchProject();
    },
    methods: {
      fetchProject() {
        const slug = this.$route.params.slug; // Ottiene lo slug dall'URL
        axios.get(`http://localhost:8000/api/projects/${slug}`)
          .then(response => {
            this.project = response.data; // Salva i dati del progetto
          })
          .catch(error => {
            console.error('Errore durante il recupero del progetto:', error);
          });
      }
    }
  };
  </script>
  