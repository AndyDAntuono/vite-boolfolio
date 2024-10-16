<template>
  <div>
    <h1>Portfolio</h1>
    
    <div v-if="loading">Caricamento in corso...</div>
    
    <div v-else>
      <div v-if="projects.length === 0">Nessun progetto disponibile.</div>
      <div v-else>
        <div v-for="project in projects" :key="project.id" class="project-list">
          <!-- Aggiungi router-link per navigare al dettaglio del progetto -->
          <router-link :to="`/projects/${project.slug}`">
            <ProjectCard :project="project" />
          </router-link>
        </div>
      </div>
      
      <!-- Controlli per la paginazione -->
      <div class="pagination-controls">
        <button @click="fetchProjects(pagination.prev_page_url)" :disabled="!pagination.prev_page_url">
          Precedente
        </button>
        <span>Pagina {{ pagination.current_page }} di {{ pagination.last_page }}</span>
        <button @click="fetchProjects(pagination.next_page_url)" :disabled="!pagination.next_page_url">
          Successiva
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import { store } from '../store'; // importazione dello store

export default {
  name: 'Portfolio',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [], 
      pagination: {
        current_page: 1,
        last_page: 1,
        prev_page_url: null,
        next_page_url: null
      },
      loading: true 
    };
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    // metodo per recuperare i progetti dalla API con la paginazione
    fetchProjects(pageUrl = store.apiUrl) { // usa l'API URL dallo store
      this.loading = true;
      axios.get(pageUrl)
        .then(response => {
          this.projects = response.data.data; // preleva i dati dall'array 'data'
          this.pagination = { // aggiorna i dati di paginazione
            current_page: response.data.current_page,
            last_page: response.data.last_page,
            prev_page_url: response.data.prev_page_url,
            next_page_url: response.data.next_page_url
          };
          this.loading = false;
        })
        .catch(error => {
          console.error('Errore durante il recupero dei progetti:', error);
          this.loading = false;
        });
    }
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

.pagination-controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

span {
  margin: 0 10px;
  font-size: 16px;
}
</style>
