<template>
  <div>
    <!-- Header che include il menù di navigazione -->
    <Header />
    
    <!-- router-view per mostrare i contenuti delle pagine -->
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'; // Importa il componente Header

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
