<template>
  <div>
    <h1>Lista dei Progetti</h1>
    <div v-if="loading">Caricamento in corso...</div>
    <div v-else>
      <div v-if="projects.length === 0">
        Nessun progetto disponibile.
      </div>
      <div v-else>
        <div v-for="project in projects" :key="project.id" class="project-list">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [],
      loading: true
    };
  },
  mounted() {
    // Eseguiamo la chiamata API per recuperare i progetti
    axios.get('http://localhost:8000/api/projects')
      .then(response => {
        this.projects = response.data; // Memorizziamo i progetti nell'array
        this.loading = false; // Imposta loading a false quando i dati sono stati ricevuti
      })
      .catch(error => {
        console.error('Errore durante il recupero dei progetti:', error);
        this.loading = false;
      });
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

.project-list {
  margin: 10px 0;
}
</style>
