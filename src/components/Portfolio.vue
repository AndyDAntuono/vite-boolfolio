<template>
  <div>
    <h1>Portfolio</h1>

    <!-- Barra di ricerca -->
    <div class="search-bar">
      <input v-model="searchSlug" placeholder="Cerca un progetto..." />
      <button @click="searchProject">Cerca</button>
    </div>

    <div v-if="loading">Caricamento in corso...</div>
    
    <div v-else>
      <div v-if="projects.length === 0">Nessun progetto disponibile.</div>
      <div v-else>
        <div v-for="project in projects" :key="project.id" class="project-list">
          <router-link :to="`/projects/${project.slug}`">
            <ProjectCard :project="project" />
          </router-link>
        </div>
      </div>
      
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
import { store } from '../store'; // Importa lo store

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
      loading: true,
      searchSlug: '', // Aggiungi lo stato per gestire lo slug da cercare
    };
  },
  mounted() {
    this.fetchProjects(); // Carica i progetti quando il componente è montato
  },
  methods: {
    // Metodo per recuperare i progetti dalla API con la paginazione
    fetchProjects(pageUrl = store.apiUrl) { 
      this.loading = true;
      axios.get(pageUrl)
        .then(response => {
          this.projects = response.data.data;
          this.pagination = {
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
    },

    // Funzione per cercare il progetto tramite lo slug
    searchProject() {
      let slug = this.searchSlug.trim(); // Rimuove eventuali spazi vuoti all'inizio e alla fine
      if (!slug) {
        alert('Inserisci uno slug valido.');
        return;
      }

      // Trasforma lo slug in minuscolo e sostituisce gli spazi con trattini
      slug = slug.toLowerCase().replace(/\s+/g, '-');
      console.log('Slug cercato:', slug);

      // Effettua la richiesta all'API per verificare se lo slug esiste
      axios.get(`http://localhost:8000/api/projects/${slug}`)
        .then(response => {
          if (response.data) {
            // Se il progetto esiste, reindirizza alla pagina di dettaglio del progetto
            this.$router.push(`/projects/${slug}`);
          }
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            // Se lo slug non esiste, reindirizza alla pagina NotFound
            this.$router.push('/notfound');
          } else {
            console.error('Errore durante la ricerca del progetto:', error);
          }
        });
    }
  }
};
</script>

<style scoped>
/* Stili esistenti */
</style>
